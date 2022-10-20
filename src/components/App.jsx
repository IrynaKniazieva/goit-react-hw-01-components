import { Profile } from 'components/Profile/Profile'
import { StatisticsTitle } from 'components/Statistics-title/Statistics-title'
import { StatisticsStats } from 'components/Statistics-stats/Statistics-stats'
import user from 'user.json'
import data from 'data.json'

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
      <StatisticsTitle title = "Upload stats"/>
      <StatisticsStats stats = {data} />
    </div>
  );
};
