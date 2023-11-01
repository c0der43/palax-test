import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editWebsiteSelector = (state: StateSchema) => state.editUser?.editWebsite ?? '';
