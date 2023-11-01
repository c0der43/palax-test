import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editZipSelector = (state: StateSchema) => state.editUser?.editZip ?? '';
