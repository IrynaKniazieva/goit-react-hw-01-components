import propTypes from 'prop-types'
import styles from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return <li className={styles.item}>
      {/* В зависимости от пропа isOnline, должен меняться цвет фона */}
    <span className={isOnline ? styles.true : styles.false}>{isOnline}</span>   
    <img className={styles.avatar} src={avatar} alt="User avatar" width="45" />
    <p className={styles.name}>{name}</p>
  </li>
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
}

