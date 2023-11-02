import {FC, memo, useCallback, useEffect} from "react";
import {Text} from "@/shared/ui/Text";
import {useSelector, useStore} from "react-redux";
import {ReduxStoreWithManager} from "@/app/providers/StoreProvider/config/ReduxStoreWithManager.ts";
import {editUserFormActions, EditUserFormReducer} from "@/features/EditUserForm/model/slices/EditUserFromSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {fetchGetUserById} from "../../model/services/fetchGetUserById/fetchGetUserById.ts";
import {Input} from "@/shared/ui/Input";
import {editNameSelector} from "@/features/EditUserForm/model/selectors/EditNameSelector/editNameSelector.ts";
import {
    editUserNameSelector
} from "@/features/EditUserForm/model/selectors/editUserNameSelector/editUserNameSelector.ts";
import {editStreetSelector} from "@/features/EditUserForm/model/selectors/editStreetSelector/editStreetSelector.ts";
import {editSuiteSelector} from "@/features/EditUserForm/model/selectors/editSuiteSelector/editSuiteSelector.ts";
import {editCitySelector} from "@/features/EditUserForm/model/selectors/editCitySelector/editCitySelector.ts";
import {editZipSelector} from "@/features/EditUserForm/model/selectors/editZipSelector/editZipSelector.ts";
import {editPhoneSelector} from "@/features/EditUserForm/model/selectors/editPhoneSelector/editPhoneSelector.ts";
import {editWebsiteSelector} from "@/features/EditUserForm/model/selectors/editWebsiteSelector/editWebsiteSelector.ts";
import {
    editCompanyNameSelector
} from "@/features/EditUserForm/model/selectors/editCompanyNameSelector/editCompanyNameSelector.ts";
import {
    editCatchPhraseSelector
} from "@/features/EditUserForm/model/selectors/editCatchPhraseSelector/editCatchPhraseSelector.ts";
import {editBsSelector} from "@/features/EditUserForm/model/selectors/editBsSelector/editBsSelector.ts";
import styles from './EditUserForm.module.scss';
import {Button} from "@/shared/ui/Button";
import {editIsLoading} from "@/features/EditUserForm/model/selectors/editUserIsLoading/editIsLoading.ts";

interface EditUserFormProps {
    userId: number;
}

const EditUserForm: FC<EditUserFormProps> = memo((props) => {

    const {
        userId
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    //selectors
    const name = useSelector(editNameSelector);
    const userName = useSelector(editUserNameSelector);
    const street = useSelector(editStreetSelector);
    const suite = useSelector(editSuiteSelector);
    const city = useSelector(editCitySelector);
    const zip = useSelector(editZipSelector);
    const phone = useSelector(editPhoneSelector);
    const website = useSelector(editWebsiteSelector);
    const companyName = useSelector(editCompanyNameSelector);
    const catchPhrase = useSelector(editCatchPhraseSelector);
    const bs = useSelector(editBsSelector);
    const isLoading = useSelector(editIsLoading);

    const changeNameHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setName(value));
    }, [dispatch]);

    const changeUserNameHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setUserName(value));
    }, [dispatch]);

    const changeStreetHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setStreet(value));
    }, [dispatch]);

    const changeSuiteHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setSuite(value));
    }, [dispatch]);

    const changeCityHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setCity(value));
    }, [dispatch]);

    const changeZipHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setZip(value));
    }, [dispatch]);

    const changePhoneHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setPhone(value));
    }, [dispatch]);

    const changeWebsiteHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setWebsite(value));
    }, [dispatch]);

    const changeCompanyNameHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setCompanyName(value));
    }, [dispatch]);

    const changeCatchPhraseHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setCatchPhrase(value));
    }, [dispatch]);

    const changeBsHandler = useCallback((value: string) => {
        dispatch(editUserFormActions.setBs(value));
    }, [dispatch]);

    useEffect(() => {
        store.reducerManager.add('editUser', EditUserFormReducer);
        dispatch({type: `@INIT add reducer`});

        dispatch(fetchGetUserById(userId));

        return () => {
            store.reducerManager.remove('editUser');
            dispatch({type: `@INIT delete reducer`});
        }
    }, [dispatch, store, userId]);

    return <>
        <form className={isLoading ? styles.disabled_container : ''}>
            <Text text={'Edit data'} bold size={'l'}/>

            <div className={styles.input_container}>
                <Input placeholder={'name'} value={name} onChange={changeNameHandler}/>
                <Input placeholder={'userName'} value={userName} onChange={changeUserNameHandler}/>
                <Input placeholder={'street'} value={street} onChange={changeStreetHandler}/>
                <Input placeholder={'suite'} value={suite} onChange={changeSuiteHandler}/>
                <Input placeholder={'city'} value={city} onChange={changeCityHandler}/>
                <Input placeholder={'zip'} value={zip} onChange={changeZipHandler}/>
                <Input placeholder={'phone'} value={phone} onChange={changePhoneHandler}/>
                <Input placeholder={'website'} value={website} onChange={changeWebsiteHandler}/>
                <Input placeholder={'company name'} value={companyName} onChange={changeCompanyNameHandler}/>
                <Input placeholder={'catch phrase'} value={catchPhrase} onChange={changeCatchPhraseHandler}/>
                <Input placeholder={'bs'} value={bs} onChange={changeBsHandler}/>
            </div>

            <Button style={{marginTop: '15px'}}>save</Button>
        </form>
    </>

});

export default EditUserForm;
