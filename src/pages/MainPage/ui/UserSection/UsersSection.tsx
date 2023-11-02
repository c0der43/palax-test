import {FC, memo, useCallback, useEffect, useState} from "react";
import {Text} from "@/shared/ui/Text";
import {fetchGetUsers, ListUserItem} from "@/entities/User";
import styles from './UsersSection.module.scss';
import classNames from "classnames";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {mainPageUsersSelectors} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";
import {fetchGetPostsByUserId} from "@/entities/Post";
import {EditUserModal} from "@/features/EditUserForm/ui/EditUserModal/EditUserModal.tsx";
import {
    usersIsLoadingSelector
} from "@/pages/MainPage/model/selectors/usersIsLoadingSelector/usersIsLoadingSelector.ts";

interface UsersSectionProps {
    className?: string;
}
export const UsersSection: FC<UsersSectionProps> = memo((props) => {

    const {
        className
    } = props;

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

    const users = useSelector(mainPageUsersSelectors.selectAll);
    const isLoadingUsers = useSelector(usersIsLoadingSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch]);

    const fetchUserPosts = useCallback((userId: number) => {
        dispatch(fetchGetPostsByUserId(userId));
    }, [dispatch]);

    const clickOpenModal = useCallback((userId: number) => {
        setIsOpenModal(true);
        setSelectedUserId(userId);
    }, [setIsOpenModal]);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
        }, [setIsOpenModal]);

    return <>
        <section className={classNames(styles.container, className)}>
            <Text title={'Users'} size={'m'} bold/>

            <ListUserItem
                onClickViewUserPost={fetchUserPosts}
                users={users}
                onClickOpenModal={clickOpenModal}
                className={styles.list}/>

            {isLoadingUsers && <Text text={'loading...'}/>}

            {
                selectedUserId && isOpenModal &&  <EditUserModal userId={selectedUserId} onClose={onCloseModal}/>
            }
        </section>
    </>

});
