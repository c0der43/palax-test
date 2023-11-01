import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editStreetSelector = (state: StateSchema) => state.editUser?.editStreet ?? '';
