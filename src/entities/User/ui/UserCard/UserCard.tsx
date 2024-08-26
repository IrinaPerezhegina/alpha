/* eslint-disable max-len */
import { classNames } from 'shared/lib/classnames/classNames';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    getFetchUsersData,
    getFetchUsersIsLoading,
} from 'entities/User/model/selectors/users/users';
import { fetchUsersList } from 'entities/User/model/services/fetchUsersData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Profile from 'shared/assets/profile.jpg';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './UserCard.module.scss';

interface UserCardProps {
className?: string;
}

export const UserCard = memo(({ className }:UserCardProps) => {
    const { id } = useParams<{id:string}>();
    const item = useSelector(getFetchUsersData).find((el) => el.id === Number(id));
    const isLoading = useSelector(getFetchUsersIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isLoading && !item) {
            dispatch(fetchUsersList());
        }
    }, [dispatch, id, isLoading, item]);

    if (!item) {
        return (
            <VStack
                gap="50"
                justify="between"
                max
                className={classNames(cls.UserCard, {}, [className])}
            >
                <HStack justify="start">
                    <Skeleton height="100px" width="100px" />
                </HStack>
                <Skeleton border="50%" height="100px" width="100px" />
                <Skeleton border="20px" height="200px" width="600px" />
                <Skeleton border="20px" height="200px" width="600px" />
            </VStack>
        );
    } return (
        <VStack
            gap="50"
            justify="between"
            max
            className={classNames(cls.UserCard, {}, [className])}
        >
            <HStack justify="start" max>
                <AppLink
                    to={RoutePath.main}
                >
                    <Button
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                    >
                        Go back to the list of cards
                    </Button>
                </AppLink>
            </HStack>
            <VStack gap="50" className={cls.content}>
                <HStack gap="16">
                    <Avatar
                        src={Profile}
                        size={150}
                    />
                </HStack>
                <HStack gap="8" max>
                    <VStack align="start">
                        <HStack align="center" gap="16" justify="between">
                            <Text
                                title="Username:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.username}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="between">
                            <Text
                                title="Name:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.name}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Email:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.email}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Phone:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.phone}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Website:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.website}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Company:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.company.name}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="CatchPhrase:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.company.catchPhrase}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="City:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.address.city}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Street:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.address.street}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Suite:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.address.suite}
                            />
                        </HStack>
                        <HStack align="center" gap="16" justify="center">
                            <Text
                                title="Zipcode:"
                            />
                            <Text
                                size={TextSize.L}
                                title={item.address.zipcode}
                            />
                        </HStack>
                    </VStack>

                </HStack>
            </VStack>
            <VStack>
                <Text title="About me" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam dicta harum assumenda recusandae corrupti nemo quo, fugit explicabo. Veniam, autem fugiat suscipit iusto voluptatem delectus corrupti sint beatae consectetur.
                Eius quos neque quidem temporibus et pariatur incidunt ea quibusdam alias! Nam itaque minus odio, ullam quod debitis voluptates natus in sit harum magni sapiente, impedit, ad sunt similique ratione?
                Hic exercitationem suscipit eaque consequuntur, repudiandae voluptas qui quam odit perspiciatis sit eligendi ut maiores dolore velit quisquam quod ex in, omnis dicta reiciendis? Minus eos cum doloremque repellendus adipisci.
                Delectus, ipsa officiis, facere atque, ex nemo et quod iusto quis magni sunt explicabo? Perferendis quas alias eaque, est voluptatibus vel, amet aspernatur assumenda consequuntur fugit at maiores, hic molestiae.
                Temporibus sequi quis in vero, assumenda sapiente. Eius quibusdam delectus aperiam molestiae autem dolorum nostrum perspiciatis beatae distinctio, laudantium alias eveniet reiciendis quia consequuntur perferendis quasi aut ullam animi amet!
            </VStack>
        </VStack>
    );
});
