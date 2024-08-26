import {
    HTMLAttributeAnchorTarget,
    memo,
    useCallback,
} from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classnames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Icon } from 'shared/ui/Icon/Icon';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Profile from 'shared/assets/profile.jpg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { TiDeleteOutline } from 'react-icons/ti';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './UserItem.module.scss';
import { User } from '../../model/types/user';

interface UserItemProps {
   className?: string;
   item:User;
   target?:HTMLAttributeAnchorTarget;
   onClick?:(id:number)=>void;
   onDelete?:(id:number)=>void;
   isLoading:boolean
}

export const UserItem = memo((props:UserItemProps) => {
    const {
        className,
        item,
        target,
        onClick,
        onDelete,
        isLoading,
    } = props;

    const statusHandler = useCallback(() => {
        onClick?.(item.id);
    }, [item.id, onClick]);

    const deleteCard = useCallback(() => {
        onDelete?.(item.id);
    }, [item.id, onDelete]);

    const content = (
        <VStack
            gap="32"
            max
            className={classNames(cls.userItem, {}, [className])}
        >
            <HStack justify="between" max>
                <Text
                    theme={TextTheme.INVERTED}
                    size={TextSize.L}
                    title="Profile card"
                />
                <Button theme={ButtonTheme.CLEAR} onClick={deleteCard}>
                    <Icon Svg={TiDeleteOutline} fontSize={50} />
                </Button>
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
                                className={cls.title}
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
                                className={cls.title}
                                text={item.email}
                            />
                        </HStack>
                        <HStack align="start" gap="8">
                            <Text
                                text="phone:"
                            />
                            <Text
                                className={cls.title}
                                text={item.phone}
                            />
                        </HStack>
                        <HStack align="start" gap="8">
                            <Text
                                text="city:"
                            />
                            <Text
                                className={cls.title}
                                text={item.address.city}
                            />
                        </HStack>
                    </VStack>
                    <Avatar src={Profile} />
                </HStack>

            </VStack>
            <HStack max justify="start" gap="50" align="center">
                <AppLink
                    target={target}
                    to={`${RoutePath.card}/${item.id}`}
                >
                    <Button>More detailed...</Button>
                </AppLink>
                <Button theme={ButtonTheme.CLEAR} onClick={statusHandler}>
                    <Icon
                        Svg={item.like ? FaHeart : FaRegHeart}
                        fontSize={40}
                        className={cls.like}
                    />
                </Button>

            </HStack>
        </VStack>
    );
    const isLoadingContent = (
        <VStack
            gap="32"
            max
        >
            <Skeleton width="90vh" height="220px" border="10px" />
        </VStack>
    );
    if (isLoading) {
        return isLoadingContent;
    } return content;
});
