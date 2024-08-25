import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from '../types/user';

export const changeStatusCard = createAsyncThunk<
User,
 number,
 ThunkConfig<string>>(
     'user/changeStatusCard',
     async (id, thunkAPI) => {
         const { rejectWithValue, extra } = thunkAPI;

         try {
             const response = await extra.api.patch<User>(`/users/${id}`);

             if (!response.data) {
                 throw new Error();
             }
             return response.data;
         } catch (e) {
             console.log(e);

             return rejectWithValue('error');
         }
     },
 );
