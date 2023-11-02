import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {editGetAllFields} from "@/features/EditUserForm/model/selectors/editGetAllFields/editGetAllFields.ts";

export const fetchUpdateUserData = createAsyncThunk<IUser, void, ThunkConfig<string>>(
    'fetch/updateUserDataById',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const values = editGetAllFields(getState());

        const userData = values?.currentUser;

        const obj: Omit<IUser, 'id'> = {
            name: values?.name ?? '',
            username: values?.username ?? '',
            email: values?.email ?? '',
            phone: values?.phone ?? '',
            website: values?.website ?? '',
            address: {
                street: values?.street ?? '',
                zipcode: values?.zipcode ?? '',
                city: values?.city ?? '',
                suite: values?.suite ?? '',
                geo: {
                    lat: userData?.address.geo.lat ?? '',
                    lng: userData?.address.geo.lng ?? ''
                }
            },
            company: {
                name: values?.companyName ?? '',
                catchPhrase: values?.catchPhrase ?? '',
                bs: values?.bs ?? ''
            }

        }

        try {
            const {data} = await extra.api.patch(`/users/${values?.currentUser?.id}`, obj);
            console.log(data);
            return data;
        }catch (e){
            alert(e);
            return rejectWithValue('error');
        }
    }
);
