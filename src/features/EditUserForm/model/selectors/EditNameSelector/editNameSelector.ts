import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editNameSelector = (state: StateSchema) => state.editUser?.editName ?? '';
