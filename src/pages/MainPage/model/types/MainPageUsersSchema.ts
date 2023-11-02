import {EntityState} from "@reduxjs/toolkit";
import {IUser} from "@/entities/User";

export interface MainPageUsersSchema extends EntityState<IUser>{
    isLoading: boolean;
}
