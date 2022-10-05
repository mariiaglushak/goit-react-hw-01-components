import user from "../json/user.json";
import data from "../json/data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json"

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import FriendListItem from "./FriendList/FriendListItem";
import TransactionHistory from "./TransactionHistory/TransactionHistory"

export const App = () => {
  return (
    <div className="wrapper">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
        func={FriendListItem}
      />
      <TransactionHistory
        items={transactions}
      />
     
    </div>
  );
};

