import {ChangeEvent, FC, InputHTMLAttributes, memo} from "react";
import styles from './Input.module.scss';
import classNames from "classnames";

type newTypeInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
interface InputProps extends newTypeInput{
    onChange?: (value: string) => void;
}
export const Input: FC<InputProps> = memo((props) => {

    const {
        onChange,
        ...other
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return <>
        <input onChange={onChangeHandler} className={classNames(styles.Input)} {...other}/>
    </>

});
