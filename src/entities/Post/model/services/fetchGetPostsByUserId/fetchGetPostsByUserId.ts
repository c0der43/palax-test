import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPost} from "@/entities/Post";
import {ThunkConfig} from "@/app/providers/StoreProvider";

export const fetchGetPostsByUserId = createAsyncThunk<IPost[], number, ThunkConfig<string>>(
    'fetch/getPostsByUserId',
    async (userId, thunkAPI) => {
        const {
            extra,
            rejectWithValue
        } = thunkAPI;

        try {
            const {data} = await extra.api.get<IPost[]>(`/posts?userId=${userId}`);
            return data;
        }catch (e){
            alert(e);
            return rejectWithValue('error');
        }
    }
);
