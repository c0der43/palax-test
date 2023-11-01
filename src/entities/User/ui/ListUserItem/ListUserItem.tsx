import {FC, memo} from "react";
import styles from './ListUserItem.module.scss';
import {UserItem} from "@/entities/User/ui/UserItem/UserItem.tsx";
import classNames from "classnames";
import {IUser} from "@/entities/User";

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
