import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import styles from './Button.module.scss';

type ButtonStyle = 'normal' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    btnStyle?: ButtonStyle;
    children: ReactNode;
    className?: string;
}
export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        btnStyle = 'normal',
        ...other
    } = props;

    return <>
        <button className={classNames(className,styles.Button, styles[btnStyle])} {...other}>
            {children}
        </button>
    </>

};
