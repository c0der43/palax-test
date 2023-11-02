import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditUserFormSchema} from "@/features/EditUserForm/model/types/EditUserFormSchema.ts";
import {fetchGetUserById} from "@/features/EditUserForm/model/services/fetchGetUserById/fetchGetUserById.ts";
import {fetchUpdateUserData} from "@/features/EditUserForm/model/services/fetchUpdateUserData/fetchUpdateUserData.ts";
import {IUser} from "@/entities/User";

const initialState: EditUserFormSchema = {
    isLoading: false,
    currentUser: undefined,
    name:'',
    username: '',
    street: '',
    email: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
}

const EditUserFromSlice = createSlice({
    name: 'editUserFromSlice',
    initialState: initialState,
    reducers: {
        setName: (state, {payload}: PayloadAction<string>) => {
          state.name = payload;
        },
        // setCurrentUser: (state, {payload}: PayloadAction<string>) => {
        //     state.editName = payload;
        // },
        setUserName: (state, {payload}: PayloadAction<string>) => {
            state.username = payload;
        },
        setStreet: (state, {payload}: PayloadAction<string>) => {
            state.street = payload;
        },
        setSuite: (state, {payload}: PayloadAction<string>) => {
            state.suite = payload;
        },
        setCity: (state, {payload}: PayloadAction<string>) => {
            state.city = payload;
        },
        setZip: (state, {payload}: PayloadAction<string>) => {
            state.zipcode = payload;
        },
        setPhone: (state, {payload}: PayloadAction<string>) => {
            state.phone = payload;
        },
        setWebsite: (state, {payload}: PayloadAction<string>) => {
            state.website = payload;
        },
        setCompanyName: (state, {payload}: PayloadAction<string>) => {
            state.companyName = payload;
        },
        setCatchPhrase: (state, {payload}: PayloadAction<string>) => {
            state.catchPhrase = payload;
        },
        setBs: (state, {payload}: PayloadAction<string>) => {
            state.bs = payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchGetUserById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetUserById.fulfilled, (state, {payload}) => {
            if (payload){
                Object.keys(payload).map(key => {
                    if(key === 'address'){
                        state.street = payload.address.street;
                        state.suite = payload.address.suite;
                        state.zipcode = payload.address.zipcode;
                        state.city = payload.address.city;
                    }
                    if(key === 'company'){
                        state.companyName = payload.company.name;
                        state.catchPhrase = payload.company.catchPhrase;
                        state.bs = payload.company.bs;
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    state[key] = payload[key];
                });
            }
            state.isLoading = false;
        })
        builder.addCase(fetchGetUserById.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(fetchUpdateUserData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUpdateUserData.fulfilled, (state, {payload}: PayloadAction<IUser>) => {
            state.isLoading = false;

            if (payload){
                Object.keys(payload).map(key => {
                    if(key === 'address'){
                        state.street = payload.address.street;
                        state.suite = payload.address.suite;
                        state.zipcode = payload.address.zipcode;
                        state.city = payload.address.city;
                    }
                    if(key === 'company'){
                        state.companyName = payload.company.name;
                        state.catchPhrase = payload.company.catchPhrase;
                        state.bs = payload.company.bs;
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    state[key] = payload[key];
                });
            }
        })
        builder.addCase(fetchUpdateUserData.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {
    reducer: EditUserFormReducer,
    actions: editUserFormActions
} = EditUserFromSlice;
