import clsx from 'clsx';

import styles from './FriendList.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name: username, isOnline, id }) => {
    return (
      <li key={id} className={styles.friendListItem}>
        <div>
          <img src={avatar} alt={username} className={styles.friendImage} />
          <h2>{username}</h2>
          <p
            className={clsx({
              [styles.userOnline]: isOnline,
              [styles.userOffline]: !isOnline,
            })}
          >
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </li>
    );
  });
};

export default FriendListItem;
