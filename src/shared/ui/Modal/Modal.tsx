import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";
import styles from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose?: () => void;
}
export const Modal: FC<ModalProps> = (props) => {

    const {
        onClose,
        children
    } = props;

    const modal = <>
        <div className={styles.Modal} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </>

    return createPortal(
        modal,
        document.body
    );

}
