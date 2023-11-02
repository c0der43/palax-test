import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editEmail = (state: StateSchema) => state?.editUser?.email ?? '';
