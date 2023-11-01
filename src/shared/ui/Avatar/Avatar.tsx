import {FC, memo} from "react";
import styles from './Avatar.module.scss';
import classNames from "classnames";

type AvatarSize = 's' | 'm';
interface AvatarProps {
    urlAvatar?: string;
    size?: AvatarSize;
}

const sizeToClass: Record<AvatarSize, string> = {
    s: styles.small,
    m: styles.normal
}

export const Avatar: FC<AvatarProps> = memo((props) => {

    const {
        size = 'm',
        urlAvatar = 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1288'
    } = props;

    return <img className={classNames(styles.Avatar, sizeToClass[size])}
                alt={'user photo'}
                src={urlAvatar}/>


});
