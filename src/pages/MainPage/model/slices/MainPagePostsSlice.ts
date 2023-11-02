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
        },
        initPosts: (state, {payload}: PayloadAction<IPost[]>) => {
            postsAdapter.addMany(state, payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchGetPostsByUserId.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetPostsByUserId.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(fetchGetPostsByUserId.fulfilled, (state, {payload}) => {
            if(payload) {
                postsAdapter.addMany(state, payload);
            }
            state.isLoading = false;
        })
    }
})

export const {
    reducer: mainPagePostReducer,
    actions: mainPagePostActions
} = mainPagePostsSlice;
