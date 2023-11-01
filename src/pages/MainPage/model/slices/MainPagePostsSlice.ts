import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {IPost} from "@/entities/Post";
import {MainPagePostsSchema} from "@/pages/MainPage/model/types/MainPagePostsSchema.ts";


const postsAdapter = createEntityAdapter<IPost>({
    selectId: (post) => post.id
})

const mainPagePostsSlice = createSlice({
    name: 'mainPagePostSlice',
    initialState: postsAdapter.getInitialState<MainPagePostsSchema>({
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {}
})

export const {
    reducer: mainPagePostReducer
} = mainPagePostsSlice;
