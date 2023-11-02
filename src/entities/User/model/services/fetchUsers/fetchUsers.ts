import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "@/entities/User";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetUsers = createAsyncThunk<IUser[], void, ThunkConfig<string>>(
    'fetch/getUsers',
    async (_, thunkAPI) => {

        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try{
            const {data} = await extra.api.get<IUser[]>('/users');
            return data;
        }catch (e){
            alert(e);
            return rejectWithValue('error');
        }
    }
);
