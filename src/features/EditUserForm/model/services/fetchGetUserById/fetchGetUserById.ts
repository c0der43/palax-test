import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetUserById = createAsyncThunk<IUser, number, ThunkConfig<string>>(
    'fetch/getUserById',
    async (userId, thunkAPI) => {

        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try {
            const {data} = await extra.api.get<IUser>(`/users/${userId}`);
            return data;
        }catch (e){
            alert(e);
            return rejectWithValue('error');
        }
    }
)
