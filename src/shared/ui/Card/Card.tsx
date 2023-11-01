import {CSSProperties, FC, ReactNode, useMemo} from "react";
import styles from './Card.module.scss';
import classNames from "classnames";

interface CardProps {
    children?: ReactNode;
    borderRadiusPx?: number;
    paddingX?: number,
    paddingY?: number,
    shadow?: boolean,
    bgColor?: string;
}
export const Card: FC<CardProps> = (props) => {

    const {
        shadow = true,
        children,
        borderRadiusPx = 8,
        paddingX=  15,
        paddingY = 15,
        bgColor,
    } = props;

    const cssStyles = useMemo<CSSProperties>(() => ({
        borderRadius: borderRadiusPx,
        padding: `${paddingX}px ${paddingY}px`,
        backgroundColor: bgColor
    }), [bgColor, borderRadiusPx, paddingY, paddingX]);

    return <>
        <div style={cssStyles} className={classNames(styles.Card, {[styles.shadow]: shadow})}>
            {children}
        </div>
    </>

}
