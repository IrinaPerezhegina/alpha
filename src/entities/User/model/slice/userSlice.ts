import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { fetchUsersList } from '../services/fetchUsersData';
import { changeStatusCard } from '../services/changeStatusCard';
import { deleteCard } from '../services/deleteCard';

const initialState: UserSchema = {
    data: [],
    isLoading: false,
    error: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchUsersList.fulfilled,
                (state, action :PayloadAction<User[]>) => {
                    state.isLoading = false;
                    action.payload.map((item) => state.data.push({ ...item, like: false }));
                },
            )
            .addCase(fetchUsersList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(changeStatusCard.pending, (state) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(
                changeStatusCard.fulfilled,
                (state, action :PayloadAction<User>) => {
                    state.isLoading = false;
                    const status = state
                        .data.find((item:User) => item.id === action.payload.id).like;
                    const index = state
                        .data.findIndex((item:User) => item.id === action.payload.id);
                    state.data[index] = { ...action.payload, like: !status };
                },
            )
            .addCase(changeStatusCard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteCard.pending, (state) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(
                deleteCard.fulfilled,
                (state, action :PayloadAction<{id:number}>) => {
                    state.isLoading = false;
                    state.data = state.data.filter((item:User) => item.id !== action.payload.id);
                },
            )
            .addCase(deleteCard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
