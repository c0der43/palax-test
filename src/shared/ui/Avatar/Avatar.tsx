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
        urlAvatar = 'https://cdnb.artstation.com/p/assets/images/images/058/544/747/large/adriano-dias-render0000-0117.jpg?1674421537'
    } = props;

    return <img loading={'lazy'} className={classNames(styles.Avatar, sizeToClass[size])}
                alt={'user photo'}
                src={urlAvatar}/>


});
