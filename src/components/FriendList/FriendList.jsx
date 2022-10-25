import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import styles from './FriendList.module.css'
import propTypes from 'prop-types'

export const FriendList = ({friends}) => {
    return <ul className={styles.friendList}>
   {friends.map(({id, avatar, name, isOnline}) => (
    <FriendListItem 
    key={id} 
    avatar={avatar}
    name={name}
    isOnline={isOnline}/>
   ))}
  </ul>
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ).isRequired
}
