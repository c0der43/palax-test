import {FC, memo} from "react";
import {IUser} from "@/entities/User/model/types/IUser.ts";
import styles from './ListUserItem.module.scss';
import {UserItem} from "@/entities/User/ui/UserItem/UserItem.tsx";
import classNames from "classnames";

interface ListUserItemProps {
    users: IUser[];
    className?: string;
}
export const ListUserItem: FC<ListUserItemProps> = memo((props) => {

    const {
        className,
        users
    } = props;

    return <>
        <div className={classNames(styles.ListUser, className)}>
            {
                users.map((user) => <UserItem user={user} key={user.id}/>)
            }
        </div>
    </>

});
