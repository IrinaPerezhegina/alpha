import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from '../types/user';

export const deleteCard = createAsyncThunk<
User,
 number,
 ThunkConfig<string>>(
     'user/deleteCard',
     async (id, thunkAPI) => {
         const { rejectWithValue, extra } = thunkAPI;

         try {
             const response = await extra.api.delete<User>(`/users/${id}`);

             if (!response.data) {
                 throw new Error();
             }
             return { ...response.data, id };
         } catch (e) {
             console.log(e);

             return rejectWithValue('error');
         }
     },
 );
