import {EnhancedStore} from "@reduxjs/toolkit";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {ReducerManager} from "@/app/providers/StoreProvider/config/reducerManager.ts";

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
