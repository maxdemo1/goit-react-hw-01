import './App.css';
import Profile from './Profile/Profile';
import profileData from '../dataForComponents/Profile.json';

import FriendList from './FriendList/FriendList';
import friendListData from '../dataForComponents/FriendList.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = profileData;

function App() {
  return (
    <div className="app-container">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <FriendList friendsListData={friendListData} />
    </div>
  );
}

export default App;
