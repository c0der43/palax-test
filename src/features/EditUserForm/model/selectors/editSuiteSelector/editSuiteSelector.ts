import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editSuiteSelector = (state: StateSchema) => state.editUser?.editSuite ?? '';
