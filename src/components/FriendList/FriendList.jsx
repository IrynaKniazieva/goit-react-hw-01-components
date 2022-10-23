import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import styles from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return <ul className={styles.friendList}>
   {friends.map(({id, avatar, name, isOnline}) => (
    <FriendListItem 
    key={id} 
    avatar={avatar}
    name={name}
    isOnline={isOnline} />
   ))}
  </ul>
}