import {FC, memo} from "react";
import styles from './UserItem.module.scss';
import {IUser} from "@/entities/User/model/types/IUser.ts";
import {Text} from "@/shared/ui/Text";
import { GrMapLocation } from "react-icons/gr";
import {AppGoogleMap} from "@/shared/ui/AppGoogleMap";

interface UserItemProps {
    user: IUser
}
export const UserItem: FC<UserItemProps> = memo((props) => {

    const {
        user
    } = props;

    return <>
        <article className={styles.User}>
            <div className={styles.info_header}>
                <img className={styles.profile_photo}
                     alt={'user photo'}
                     src={'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1288'}/>

                <div>
                    <div>
                        <Text text={user.name} bold className={styles.bio} size={'l'}/>
                        <div style={{display: 'flex', whiteSpace:'nowrap', gap: '15px'}}>
                            <Text text={`@${user.username}`}/>
                            <Text text={`+${user.phone}`} bold/>
                        </div>
                    </div>

                    <div className={styles.short_address_info}>
                        <GrMapLocation size={20}/>
                        <Text text={user.address.city}/>
                    </div>
                </div>
            </div>

            <div className={styles.divider}/>

            <div style={{display: 'flex', justifyContent: 'space-between', gap: '15px'}}>
                <div>
                    <fieldset>
                        <legend>Адресс</legend>
                        <Text text={`Улица: ${user.address.street}`}/>
                        <Text text={`Номер: ${user.address.suite}`}/>
                        <Text text={`Город: ${user.address.city}`}/>
                        <Text text={`Zip: ${user.address.zipcode}`}/>
                    </fieldset>

                    <fieldset>
                        <legend>Компания</legend>
                        <Text text={`Название: ${user.company.name}`}/>
                        <Text text={`Слоган: ${user.company.catchPhrase}`}/>
                        <Text text={`Описание: ${user.company.bs}`}/>
                    </fieldset>
                </div>

                <div className={styles.map_container}>
                    <AppGoogleMap userLocation={user.address.geo}/>
                    {/*test*/}
                </div>
            </div>
        </article>
    </>

});
