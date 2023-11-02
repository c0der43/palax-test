import {FC, ReactNode} from "react";
import styles from './Page.module.scss';
import classNames from "classnames";

interface PageProps {
    className?: string;
    children?: ReactNode;
}
export const Page: FC<PageProps> = (props) => {

    const {
        className,
        children
    } = props;

    return <>
        <main className={classNames(styles.Page, className)}>
            {children}
        </main>
    </>

}
