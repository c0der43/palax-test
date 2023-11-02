import {IUser} from "@/entities/User";

export interface EditUserFormSchema {
    isLoading: boolean,
    currentUser?: IUser,

    email: string;
    name: string;
    username: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    companyName: string;
    catchPhrase: string;
    bs: string;
}
