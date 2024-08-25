import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from '../types/user';

export const fetchUsersList = createAsyncThunk<
User[],
 void,
 ThunkConfig<string>>(
     'user/fetchUsersList',
     async (_, thunkAPI) => {
         const { rejectWithValue, extra } = thunkAPI;

         try {
             const response = await extra.api.get<User[]>('/users');

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
