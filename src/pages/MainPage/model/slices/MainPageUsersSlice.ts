import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {MainPageUsersSchema} from "@/pages/MainPage/model/types/MainPageUsersSchema.ts";
import {fetchGetUsers, IUser} from "@/entities/User";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

const usersAdapter = createEntityAdapter<IUser>({
    selectId: (user) => user.id
});

export const mainPageUsersSelectors = usersAdapter
    .getSelectors<StateSchema>((state) => state.mainPage.users)

const mainPageUsersSlice = createSlice({
    name: 'namePageUserSlice',
    initialState: usersAdapter.getInitialState<MainPageUsersSchema>({
        isLoading: false,
        entities: {},
        ids: []
    }),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGetUsers.fulfilled, (state, {payload}) => {
            usersAdapter.setAll(state, payload);
            state.isLoading = false;
        })
        builder.addCase(fetchGetUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetUsers.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {
    reducer: mainPageUserReducer
} = mainPageUsersSlice;
