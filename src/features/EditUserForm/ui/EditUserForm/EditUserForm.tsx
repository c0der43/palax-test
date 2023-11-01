import {FC, memo, useEffect} from "react";
import {Text} from "@/shared/ui/Text";
import {useStore} from "react-redux";
import {ReduxStoreWithManager} from "@/app/providers/StoreProvider/config/ReduxStoreWithManager.ts";
import {EditUserFormReducer} from "@/features/EditUserForm/model/slices/EditUserFromSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {fetchGetUserById} from "../../model/services/fetchGetUserById/fetchGetUserById.ts";

interface EditUserFormProps {
    userId: number;
}

const EditUserForm: FC<EditUserFormProps> = memo((props) => {

    const {
        userId
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        store.reducerManager.add('editUser', EditUserFormReducer);
        dispatch({type: `@INIT reducer`});

        dispatch(fetchGetUserById(userId));

        return () => {
            store.reducerManager.remove('editUser');
            dispatch({type: `@INIT delete`});
        }
    }, [dispatch, store]);

    return <>
        <form>
            <Text text={'Edit data'} bold size={'m'}/>

            <div>
                <input placeholder={'test'}/>
            </div>
        </form>
    </>

});

export default EditUserForm;
