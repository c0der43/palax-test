import {FC, memo} from "react";
import styles from './UserItem.module.scss';
import {Text} from "@/shared/ui/Text";
import { GrMapLocation } from "react-icons/gr";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";
import {Card} from "@/shared/ui/Card/Card.tsx";
import {IUser} from "@/entities/User";
import {Avatar} from "@/shared/ui/Avatar";
import { MdMode } from "react-icons/md";
import {Button} from "@/shared/ui/Button";

interface UserItemProps {
    user: IUser,
    onClickViewUserPost?: (userId: number) => void;
    onClickOpenModal?: () => void;
}
export const UserItem: FC<UserItemProps> = memo((props) => {

    const {
        onClickOpenModal,
        user,
        onClickViewUserPost
    } = props;

    return <>
        <Card>
            <article className={styles.User}>

                <button className={styles.btn_edit}>
                    <MdMode size={25} onClick={() => onClickOpenModal?.()}/>
                </button>

                <div className={styles.info_header}>
                    <Avatar/>
                    <div className={styles.connect_data}>

                        <Text text={user.name} bold className={styles.bio} size={'l'}/>
                        <div style={{display: 'flex', whiteSpace:'nowrap', gap: '15px'}}>
                            <Card
                                paddingX={2}
                                bgColor={'#ff6978'}
                                paddingY={10}
                                shadow={false}>
                                <Text text={`@${user.username}`} size={'s'}/>
                            </Card>
                            <Card
                                paddingX={2}
                                paddingY={10}
                                shadow={false}
                                bgColor={'#b1ede8'}>
                                <Text text={`+${user.phone}`} bold/>
                            </Card>
                        </div>

                        <div className={styles.short_address_info}>
                            <GrMapLocation size={20}/>
                            <Text text={user.address.city}/>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}/>

                <div className={styles.info_container}>
                    <div className={styles.fieldset_container}>
                        <fieldset>
                            <legend>Адресс</legend>
                            <Text text={`Street: ${user.address.street}`}/>
                            <Text text={`Suite: ${user.address.suite}`}/>
                            <Text text={`City: ${user.address.city}`}/>
                            <Text text={`Zip: ${user.address.zipcode}`}/>
                        </fieldset>

                        <fieldset>
                            <legend>Компания</legend>
                            <Text text={`Comp. name: ${user.company.name}`}/>
                            <Text text={`Phrase: ${user.company.catchPhrase}`}/>
                            <Text text={`Desc: ${user.company.bs}`}/>
                        </fieldset>
                    </div>

                    <div className={styles.map_container}>
                        <AppGoogleMap userLocation={user.address.geo}/>
                    </div>
                </div>
                <Button
                    onClick={() => onClickViewUserPost?.(user.id)}
                    className={styles.btn_add}>
                    view posts
                </Button>
            </article>
        </Card>
    </>

});
