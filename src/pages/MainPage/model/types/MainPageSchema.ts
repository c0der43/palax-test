import {MainPageUsersSchema} from "@/pages/MainPage/model/types/MainPageUsersSchema.ts";
import {MainPagePostsSchema} from "@/pages/MainPage/model/types/MainPagePostsSchema.ts";

export interface MainPageSchema {
    users: MainPageUsersSchema;
    posts: MainPagePostsSchema
}
