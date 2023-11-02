import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const usersIsLoadingSelector = (state: StateSchema) => state.mainPage.users.isLoading ?? false;
