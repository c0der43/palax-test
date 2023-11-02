import {FC, memo, useCallback, useEffect} from "react";
import {Text} from "@/shared/ui/Text";
import {ListPostItem} from "@/entities/Post";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {mainPagePostActions, mainPagePostsSelectors} from "@/pages/MainPage/model/slices/MainPagePostsSlice.ts";
import {mainPageUsersSelectors} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {
    postsIsLoadingSelector
} from "@/pages/MainPage/model/selectors/postsIsLoadingSelector/postsIsLoadingSelector.ts";

interface PostsSectionProps {
    className?: string;
}
export const PostsSection: FC<PostsSectionProps> = memo((props) => {

    const {
        className
    } = props;

    const dispatch =  useAppDispatch();

    const isLoadingPosts = useSelector(postsIsLoadingSelector);

    const posts = useSelector(mainPagePostsSelectors.selectAll);
    const users = useSelector(mainPageUsersSelectors.selectAll);

    const onDeletePostById = useCallback((postId: number) => {
        dispatch(mainPagePostActions.deletePostById(postId));
    }, [dispatch]);

    useEffect(() => {
        const posts = localStorage.getItem('posts');
        if(posts){
            dispatch(mainPagePostActions.initPosts(JSON.parse(posts)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts]);

    return <>
        <section className={classNames(className)}>
            <Text text={'Posts'} size={'l'} bold/>

            <ListPostItem
                listPost={posts}
                onClickDeletePost={onDeletePostById}
                listUser={users}/>

            {isLoadingPosts && <Text text={'loading...'}/>}
        </section>
    </>

});
