import {memo} from "react";
import styles from './Header.module.scss';
import {Text} from "@/shared/ui/Text";

export const Header = memo(() => {

    return <>
        <header className={styles.Header}>
            <div className={styles.container}>
                <Text title={'Palax тестовое'} bold/>
            </div>
        </header>
    </>

});
