import {FC, memo} from "react";
import {Text} from "@/shared/ui/Text";

const EditUserForm: FC = memo(() => {

    return <>
        <form>
            <Text text={'Edit data'} bold size={'m'}/>

            <div>
                <input placeholder={'test'}/>
            </div>
        </form>
    </>

});

export default EditUserForm;
