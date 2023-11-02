import {FC, memo} from "react";
import {Page} from "@/widgets/Page";
import styles from './MainPage.module.scss';
import {UsersSection} from "../UserSection/UsersSection.tsx";
import {PostsSection} from "@/pages/MainPage/ui/PostSection/PostsSection.tsx";

const MainPage: FC = memo(() => {

    return <>
        <Page>
            <div className={styles.MainPage}>
                <UsersSection className={styles.users}/>
                <PostsSection className={styles.posts}/>
            </div>
        </Page>
    </>

});

export default MainPage;
