import {createSlice} from "@reduxjs/toolkit";
import {EditUserFormSchema} from "@/features/EditUserForm/model/types/EditUserFormSchema.ts";

const initialState: EditUserFormSchema = {
    isLoading: false,
    currentUser: undefined
}

const EditUserFromSlice = createSlice({
    name: 'editUserFromSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: {}
});

export const {
    reducer: EditUserFormReducer
} = EditUserFromSlice;
