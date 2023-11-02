import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const editCatchPhraseSelector = (state: StateSchema) => state.editUser?.catchPhrase ?? '';
