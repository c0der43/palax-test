import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {mainPageReducer} from "@/pages/MainPage/model/slices";
import {ThunkExtraArg} from "@/app/providers/StoreProvider/config/ThunkExtraArg.ts";
import {$api} from "@/shared/api/api.ts";
import {createReducerManager} from "@/app/providers/StoreProvider/config/reducerManager.ts";

export const createAppStore = () => {

    const reducers: ReducersMapObject<StateSchema> = {
        mainPage: mainPageReducer
    }

    const thunkExtra: ThunkExtraArg = {
        api: $api
    }

    const reducerManager = createReducerManager(reducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtra
            }
        })
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
