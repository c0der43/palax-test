import {StateSchema} from "../../StoreProvider/config/StateSchema.ts";
import {ThunkExtraArg} from "../../StoreProvider/config/ThunkExtraArg.ts";

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema;
}
