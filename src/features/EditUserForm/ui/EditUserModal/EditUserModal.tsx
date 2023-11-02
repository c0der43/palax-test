import {FC, Suspense} from "react";
import {Modal} from "@/shared/ui/Modal";
import {Text} from "@/shared/ui/Text";
import EditUserForm from "@/features/EditUserForm/ui/EditUserForm/EditUserForm.tsx";

interface EditUserModalProps {
    onClose?: () => void;
    userId: number;
}
export const EditUserModal: FC<EditUserModalProps> = (props) => {

    const {
        userId,
        onClose
    } = props;

    return <>
        <Modal onClose={() => onClose?.()}>
                <Suspense fallback={<Text text={'loading chunk...'}/>}>
                    <EditUserForm userId={userId}/>
                </Suspense>
        </Modal>
    </>
}
