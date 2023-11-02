import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editIsLoading = (state: StateSchema) => state.editUser?.isLoading ?? false;
