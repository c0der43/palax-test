import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const postsIsLoadingSelector = (state: StateSchema) => state.mainPage?.posts?.isLoading ?? false;
