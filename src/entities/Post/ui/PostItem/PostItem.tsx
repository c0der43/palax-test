import {FC, memo} from "react";
import styles from './PostItem.module.scss';

export const PostItem: FC = memo(() => {

    return <>
        <article className={styles.PostItem}>
            POST ITEM
        </article>
    </>

});
