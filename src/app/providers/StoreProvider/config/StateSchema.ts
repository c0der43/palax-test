import {MainPageSchema} from "@/pages/MainPage/model/types/MainPageSchema.ts";
import {EditUserFormSchema} from "@/features/EditUserForm/model/types/EditUserFormSchema.ts";


export interface StateSchema {
    mainPage: MainPageSchema,
    editUser?: EditUserFormSchema
}
