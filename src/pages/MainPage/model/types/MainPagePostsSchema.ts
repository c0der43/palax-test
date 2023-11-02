import {EntityState} from "@reduxjs/toolkit";
import {IPost} from "@/entities/Post";

export interface MainPagePostsSchema extends EntityState<IPost>{
    isLoading: boolean;
}
