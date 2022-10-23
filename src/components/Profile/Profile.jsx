import styles from './Profile.module.css'
import propTypes from 'prop-types'

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return <div>
    <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.title}>@{tag}</p>
    <p className={styles.title}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.statsList}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.statsList}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.statsList}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    
  </div>;
};

Profile.propTypes = {
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.exact({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
      })
    
    
    }


 

