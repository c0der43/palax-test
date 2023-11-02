import {FC, memo} from "react";
import styles from './PostItem.module.scss';
import {IPost} from "@/entities/Post";
import {Card} from "@/shared/ui/Card/Card.tsx";
import {Text} from "@/shared/ui/Text";
import {Avatar} from "@/shared/ui/Avatar";
import {IUser} from "@/entities/User";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface PostItemProps {
    post: IPost,
    creator: IUser,
    onClickDeletePost?: (postId: number) => void;
}
export const PostItem: FC<PostItemProps> = memo((props) => {

    const {
        onClickDeletePost,
        creator,
        post,
    } = props;

    const postFooter = <>
        <div className={styles.post_footer}>
            <div className={styles.post_data_container}>
                <MdOutlineDeleteOutline
                    onClick={() => onClickDeletePost?.(post.id)}
                    size={25}
                    className={styles.delete}/>

                <Avatar size={'s'}/>

                <div>
                    <div style={{display: 'flex', gap:'5px'}}>
                        <Text text={creator?.name} bold/>
                        <Card
                            paddingX={2}
                            bgColor={'#ff6978'}
                            paddingY={10}
                            shadow={false}>
                            <Text text={`@${creator?.username}`} size={'s'}/>
                        </Card>
                    </div>

                    <Text text={creator?.email} bold size={'s'}/>
                </div>

            </div>
        </div>
    </>

    return <>
        <Card
            className={styles.PostItem}
            paddingY={0}
            paddingX={0}
        >
            <article className={styles.post_container}>
                <Text text={post.title} bold/>
                <Text text={post.body}/>
            </article>

            {
                creator && postFooter
            }
        </Card>
    </>

});
