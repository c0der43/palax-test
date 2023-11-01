import {FC, memo, useCallback, useEffect} from "react";
import {Text} from "@/shared/ui/Text";
import {fetchGetUsers, ListUserItem} from "@/entities/User";
import styles from './UsersSection.module.scss';
import classNames from "classnames";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {mainPageUsersSelectors} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";
import {fetchGetPostsByUserId} from "@/entities/Post";

interface UsersSectionProps {
    className?: string;
}
export const UsersSection: FC<UsersSectionProps> = memo((props) => {

    const {
        className
    } = props;

    const users = useSelector(mainPageUsersSelectors.selectAll);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [dispatch]);

    const fetchUserPosts = useCallback((userId: number) => {
        dispatch(fetchGetPostsByUserId(userId));
    }, [dispatch]);

    return <>
        <section className={classNames(styles.container, className)}>
            <Text title={'Users'} size={'m'} bold/>

            <ListUserItem
                onClickViewUserPost={fetchUserPosts}
                users={users}
                className={styles.list}/>
        </section>
    </>

});
