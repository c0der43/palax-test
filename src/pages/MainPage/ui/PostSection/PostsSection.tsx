import {FC, memo} from "react";
import {Text} from "@/shared/ui/Text";
import {ListPostItem} from "@/entities/Post";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {mainPagePostsSelectors} from "@/pages/MainPage/model/slices/MainPagePostsSlice.ts";
import {mainPageUsersSelectors} from "@/pages/MainPage/model/slices/MainPageUsersSlice.ts";

interface PostsSectionProps {
    className?: string;
}
export const PostsSection: FC<PostsSectionProps> = memo((props) => {

    const {
        className
    } = props;

    const posts = useSelector(mainPagePostsSelectors.selectAll);
    const users = useSelector(mainPageUsersSelectors.selectAll);

    return <>
        <section className={classNames(className)}>
            <Text text={'Posts'} size={'l'} bold/>

            <ListPostItem listPost={posts} listUser={users}/>
        </section>
    </>

});
