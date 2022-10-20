import { Profile } from 'components/Profile/Profile'
import user from 'user.json'

export const App = () => {
  return (
    <div>
      <Profile  
      avatar={user.avatar}
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      stats ={user.stats}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}/>
    </div>
  );
};
