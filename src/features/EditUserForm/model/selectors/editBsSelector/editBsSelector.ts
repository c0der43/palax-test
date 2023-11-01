import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editBsSelector = (state: StateSchema) => state.editUser?.editBs ?? '';
