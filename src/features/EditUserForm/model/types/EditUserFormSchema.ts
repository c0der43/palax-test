import {IUser} from "@/entities/User";

export interface EditUserFormSchema {
    isLoading: boolean,
    currentUser?: IUser,

    editName: string;
    editUserName: string;
    editStreet: string;
    editSuite: string;
    editCity: string;
    editZip: string;
    editPhone: string;
    editWebsite: string;
    editCompanyName: string;
    editCatchPhrase: string;
    editBs: string;
}
