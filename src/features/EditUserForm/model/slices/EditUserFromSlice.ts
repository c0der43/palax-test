import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditUserFormSchema} from "@/features/EditUserForm/model/types/EditUserFormSchema.ts";
import {fetchGetUserById} from "@/features/EditUserForm/model/services/fetchGetUserById/fetchGetUserById.ts";

const initialState: EditUserFormSchema = {
    isLoading: false,
    currentUser: undefined,
    editName:'',
    editUserName: '',
    editStreet: '',
    editSuite: '',
    editCity: '',
    editZip: '',
    editPhone: '',
    editWebsite: '',
    editCompanyName: '',
    editCatchPhrase: '',
    editBs: ''
}

const EditUserFromSlice = createSlice({
    name: 'editUserFromSlice',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, {payload}: PayloadAction<string>) => {
            state.editName = payload;
        },
        setUserName: (state, {payload}: PayloadAction<string>) => {
            state.editUserName = payload;
        },
        setStreet: (state, {payload}: PayloadAction<string>) => {
            state.editStreet = payload;
        },
        setSuite: (state, {payload}: PayloadAction<string>) => {
            state.editSuite = payload;
        },
        setCity: (state, {payload}: PayloadAction<string>) => {
            state.editCity = payload;
        },
        setZip: (state, {payload}: PayloadAction<string>) => {
            state.editZip = payload;
        },
        setPhone: (state, {payload}: PayloadAction<string>) => {
            state.editPhone = payload;
        },
        setWebsite: (state, {payload}: PayloadAction<string>) => {
            state.editWebsite = payload;
        },
        setCompanyName: (state, {payload}: PayloadAction<string>) => {
            state.editCompanyName = payload;
        },
        setCatchPhrase: (state, {payload}: PayloadAction<string>) => {
            state.editCatchPhrase = payload;
        },
        setBs: (state, {payload}: PayloadAction<string>) => {
            state.editBs = payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchGetUserById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetUserById.fulfilled, (state, {payload}) => {
            if (payload){
                state.currentUser = payload;
                state.editName = payload.name;
                state.editUserName = payload.username;
                state.editStreet = payload.address.street;
                state.editSuite = payload.address.suite;
                state.editCity = payload.address.city;
                state.editZip = payload.address.zipcode;
                state.editPhone = payload.phone;
                state.editWebsite = payload.website;
                state.editCompanyName = payload.company.name;
                state.editCatchPhrase = payload.company.catchPhrase;
                state.editBs = payload.company.bs;
            }

        })
        builder.addCase(fetchGetUserById.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {
    reducer: EditUserFormReducer
} = EditUserFromSlice;
