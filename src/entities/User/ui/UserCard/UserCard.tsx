import { classNames } from 'shared/lib/classnames/classNames';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFetchUsersData, getFetchUsersIsLoading } from 'entities/User/model/selectors/users/users';
import { fetchUsersList } from 'entities/User/model/services/fetchUsersData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Profile from 'shared/assets/profile.jpg';
import cls from './UserCard.module.scss';

interface UserCardProps {
className?: string;
}

export const UserCard = memo(({ className }:UserCardProps) => {
    const { id } = useParams<{id:string}>();
    const user = useSelector(getFetchUsersData);
    const isLoading = useSelector(getFetchUsersIsLoading);
    const dispatch = useAppDispatch();
    // console.log(id, user);
    useEffect(() => {
        dispatch(fetchUsersList());
    }, [dispatch]);
    console.log(user);
    const item = user[0];
    if (isLoading) {
        return null;
    } return (
        <VStack
            gap="32"
            max
            className={classNames(cls.UserCard, {}, [className])}
        >
            <HStack justify="start" max>
                <AppLink
                    to={RoutePath.main}
                >
                    <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                        Вернуться к списку карточек
                    </Button>
                </AppLink>
            </HStack>
            <VStack max gap="8" justify="between">
                <HStack gap="8" max justify="between">
                    <VStack align="start">
                        <HStack align="start" gap="8">
                            <Text
                                title={item.username}
                            />
                            <Text
                                title="("
                            />
                            <Text
                                title={item.name}
                            />
                            <Text
                                title=")"
                            />
                        </HStack>
                        <HStack align="start" gap="8">
                            <Text
                                text="email:"
                            />
                            <Text
                                text={item.email}
                            />
                        </HStack>
                        <HStack align="start" gap="8">
                            <Text
                                text="phone:"
                            />
                            <Text
                                text={item.phone}
                            />
                        </HStack>
                        <HStack align="start" gap="8">
                            <Text
                                text="city:"
                            />
                            <Text
                                text={item.address.city}
                            />
                        </HStack>
                    </VStack>
                    <Avatar src={Profile} />
                </HStack>

            </VStack>
            <HStack max justify="start" gap="32">
                <AppLink
                    to={`${RoutePath.card}/${item.id}`}
                >
                    <Button>Подробнее о профиле</Button>
                </AppLink>
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={item.like ? FaHeart : FaRegHeart}
                        fontSize={40}
                        className={cls.like}
                    />
                </Button>

            </HStack>
        </VStack>
    );
});
