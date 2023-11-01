import {FC, memo} from "react";
import {IPost} from "@/entities/Post/model/types/IPost.ts";
import classNames from "classnames";
import styles from './ListPostItem.module.scss';
import {PostItem} from "@/entities/Post/ui/PostItem/PostItem.tsx";

interface ListPostItemProps {
    className?: string;
    listPost: IPost[];
}
export const ListPostItem: FC<ListPostItemProps> = memo((props) => {

    const {
        listPost,
        className
    } = props;

    return <>
        <div className={classNames(styles.ListPostItem, className)}>
            {
                listPost.map((post) => <PostItem post={post}/>)
            }
        </div>
    </>
});
