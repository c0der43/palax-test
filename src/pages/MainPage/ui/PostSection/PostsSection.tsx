import {FC, memo, useCallback} from "react";
import {Text} from "@/shared/ui/Text";
import {ListPostItem} from "@/entities/Post";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {mainPagePostActions, mainPagePostsSelectors} from "@/pages/MainPage/model/slices/MainPagePostsSlice.ts";
import {mainPageUsersSelectors} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";

interface PostsSectionProps {
    className?: string;
}
export const PostsSection: FC<PostsSectionProps> = memo((props) => {

    const {
        className
    } = props;

    const dispatch =  useAppDispatch();

    const posts = useSelector(mainPagePostsSelectors.selectAll);
    const users = useSelector(mainPageUsersSelectors.selectAll);

    const onDeletePostById = useCallback((postId: number) => {
        dispatch(mainPagePostActions.deletePostById(postId));
    }, [dispatch]);

    return <>
        <section className={classNames(className)}>
            <Text text={'Posts'} size={'l'} bold/>

            <ListPostItem
                listPost={posts}
                onClickDeletePost={onDeletePostById}
                listUser={users}/>
        </section>
    </>

});
