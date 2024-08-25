import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getFetchUsersIsLoading = (
    state:StateSchema,
) => state.user?.isLoading;

export const getFetchUsersError = (
    state:StateSchema,
) => state.user?.error;

export const getFetchUsersData = (
    state:StateSchema,
) => state.user?.data;

export const getFavoriteData = createSelector(
    getFetchUsersData,
    (user) => user.filter((el) => el.like === true),
);
