import {memo} from "react";
import styles from './Header.module.scss';
import {Text} from "@/shared/ui/Text";

export const Header = memo(() => {

    return <>
        <header className={styles.Header}>
            <Text/>
        </header>
    </>
});
