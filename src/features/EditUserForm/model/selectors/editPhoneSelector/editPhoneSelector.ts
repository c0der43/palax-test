import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editPhoneSelector = (state: StateSchema) => state.editUser?.editPhone;
