import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {mainPageReducer} from "@/pages/MainPage/model/slices";
import {ThunkExtraArg} from "@/app/providers/StoreProvider/config/ThunkExtraArg.ts";
import {$api} from "@/shared/api/api.ts";

export const createAppStore = () => {

    const reducers: ReducersMapObject<StateSchema> = {
        mainPage: mainPageReducer
    }

    const thunkExtra: ThunkExtraArg = {
        api: $api
    }

    const store = configureStore({
        reducer: reducers,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtra
            }
        })
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
