import {combineReducers} from "@reduxjs/toolkit";
import {MainPageSchema} from "@/pages/MainPage/model/types/MainPageSchema.ts";
import {mainPageUserReducer} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";
import {mainPagePostReducer} from "@/pages/MainPage/model/slices/MainPagePostsSlice.ts";

export const mainPageReducer = combineReducers<MainPageSchema>({
    users: mainPageUserReducer,
    posts: mainPagePostReducer
})
