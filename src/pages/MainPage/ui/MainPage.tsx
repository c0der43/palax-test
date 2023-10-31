import {FC, memo} from "react";
import {Page} from "@/widgets/Page";
import {UsersSection} from "@/features/UsersSection";
import styles from './MainPage.module.scss';

const MainPage: FC = memo(() => {

    return <>
        <Page>
            <div className={styles.MainPage}>
                <UsersSection className={styles.users}/>
            </div>
        </Page>
    </>

});

export default MainPage;
