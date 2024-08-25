import { $api } from 'shared/api/api';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(initialState: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };
    const extraArg:ThunkExtraArg = {
        api: $api,
    };
    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,

            },
        }),
    });
    return store;
}
export type AppDispatch=ReturnType<typeof createReduxStore>['dispatch']
