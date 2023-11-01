import {IUser} from "@/entities/User";

export interface EditUserFormSchema {
    isLoading: boolean,
    currentUser?: IUser,
}
