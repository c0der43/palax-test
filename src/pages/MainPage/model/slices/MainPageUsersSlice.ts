import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {MainPageUsersSchema} from "@/pages/MainPage/model/types/MainPageUsersSchema.ts";
import {IUser} from "@/entities/User";

const usersAdapter = createEntityAdapter<IUser>({
    selectId: (user) => user.id
});

const mainPageUsersSlice = createSlice({
    name: 'namePageUserSlice',
    initialState: usersAdapter.getInitialState<MainPageUsersSchema>({
        isLoading: false,
        entities: {},
        ids: []
    }),
    reducers: {}
});

export const {
    reducer: mainPageUserReducer
} = mainPageUsersSlice;
