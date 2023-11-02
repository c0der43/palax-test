import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editUserNameSelector = (state: StateSchema) => state.editUser?.username ?? '';
