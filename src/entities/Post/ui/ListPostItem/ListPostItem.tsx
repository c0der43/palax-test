import {FC, memo} from "react";
import {IPost} from "@/entities/Post/model/types/IPost.ts";
import classNames from "classnames";
import styles from './ListPostItem.module.scss';
import {PostItem} from "@/entities/Post/ui/PostItem/PostItem.tsx";
import {IUser} from "@/entities/User";

interface ListPostItemProps {
    className?: string;
    listPost: IPost[];
    listUser: IUser[];
    onClickDeletePost?: (postId: number) => void;
}
export const ListPostItem: FC<ListPostItemProps> = memo((props) => {

    const {
        onClickDeletePost,
        listPost,
        className,
        listUser
    } = props;

    return <>
        <div className={classNames(styles.ListPostItem, className)}>
            {
                listPost.map((post) => <PostItem
                    creator={listUser.filter(user => user.id === post.userId)[0]}
                    post={post}
                    onClickDeletePost={(postId) => onClickDeletePost?.(postId)}
                    key={post.id}/>)
            }
        </div>
    </>
});
