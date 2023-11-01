import {FC, memo} from "react";
import styles from './Text.module.scss';
import classNames from 'classnames';


type TextSize = 's' | 'm' | 'l';
type HeaderType = 'h1' | 'h2' | 'h3';

const headerTagSize: Record<TextSize, HeaderType> = {
    m: 'h2',
    l: 'h1',
    s: 'h3'
};

const sizeToClass: Record<TextSize, string> = {
    s: styles.s,
    m: styles.m,
    l: styles.l,
};

interface TextProps {
    text?: string;
    title?: string;
    bold?: boolean;
    size?: TextSize;
    className?: string;
    cite?: string;
}
export const Text: FC<TextProps> = memo((props) => {

    const {
        text,
        title,
        bold,
        size= 'm',
        className
    } = props;

    const HeaderTag = headerTagSize[size];

    return <>
        <div className={classNames(sizeToClass[size], {[styles.bold]: bold}, className)}>
            {
                title && <HeaderTag className={styles.title}>
                    {title}
                </HeaderTag>
            }
            {
                text && <p className={styles.text}>{text}</p>
            }
        </div>
    </>
});
