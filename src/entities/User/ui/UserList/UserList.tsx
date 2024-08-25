import { memo, useCallback, useEffect } from 'react';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classnames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { changeStatusCard } from 'entities/User/model/services/changeStatusCard';
import { deleteCard } from 'entities/User/model/services/deleteCard';
import {
    getFavoriteData,
    getFetchUsersData,
    getFetchUsersError,
    getFetchUsersIsLoading,
} from '../../model/selectors/users/users';
import { fetchUsersList } from '../../model/services/fetchUsersData';
import cls from './UserList.module.scss';
import { UserItem } from '../UserItem/UserItem';

interface UserListProps {
   className?: string;
   favorite?:boolean
}

export const UserList = memo((props:UserListProps) => {
    const { className, favorite } = props;
    const favoriteData = useSelector(getFavoriteData);
    const data = useSelector(getFetchUsersData);
    const isLoading = useSelector(getFetchUsersIsLoading);
    const error = useSelector(getFetchUsersError);
    const dispatch = useAppDispatch();
    console.log(favoriteData);
    const users = favorite ? favoriteData : data;
    useEffect(() => {
        dispatch(fetchUsersList());
    }, [dispatch]);

    const onChangeStatus = useCallback((id:number) => {
        dispatch(changeStatusCard(id));
    }, [dispatch]);

    const onDeleteCard = useCallback((id:number) => {
        dispatch(deleteCard(id));
    }, [dispatch]);

    if (error) {
        return <p>Произошла ошибка, попробуйте позднее</p>;
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.userList, {}, [className])}
        >
            {users?.map((item:any) => (
                <UserItem
                    isLoading={isLoading}
                    key={item.id}
                    item={item}
                    onClick={onChangeStatus}
                    onDelete={onDeleteCard}
                />
            ))}
        </VStack>
    );
});
