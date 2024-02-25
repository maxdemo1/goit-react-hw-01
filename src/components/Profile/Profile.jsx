import styles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.mainInfoConatiner}>
        <img src={avatar} alt={username} className={styles.userAvatar} />
        <h3 className={styles.username}>{username}</h3>
        <p className={styles.userInfo}>{`@${tag}`}</p>
        <p className={styles.userInfo}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
