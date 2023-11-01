import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editCompanyNameSelector = (state: StateSchema) => state.editUser?.editCompanyName ?? '';
