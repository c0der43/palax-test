import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetPostsByUserId, IPost} from "@/entities/Post";
import {MainPagePostsSchema} from "@/pages/MainPage/model/types/MainPagePostsSchema.ts";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";


const postsAdapter = createEntityAdapter<IPost>({
    selectId: (post) => post.id
})
export const mainPagePostsSelectors = postsAdapter
    .getSelectors<StateSchema>((state) => state.mainPage.posts);

const mainPagePostsSlice = createSlice({
    name: 'mainPagePostSlice',
    initialState: postsAdapter.getInitialState<MainPagePostsSchema>({
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {
        deletePostById: (state, {payload}: PayloadAction<number>) => {
            postsAdapter.removeOne(state, payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchGetPostsByUserId.fulfilled, (state, action) => {
            postsAdapter.addMany(state, action);
        })
    }
})

export const {
    reducer: mainPagePostReducer,
    actions: mainPagePostActions
} = mainPagePostsSlice;
