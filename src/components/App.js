import React from 'react';
import Profile from './profile/Profile';
import Stats from './stats/Stats';
import FriendList from './friend-list/FriendList';
import user from './profile/user.json';
import stats from './stats/statsInit';
import friends from './friend-list/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import items from './transactions/transactions.json';

const App = () => (
    <>
        <Profile {...user} />
        <Stats title="Upload stats" stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={items} />
    </>
);

export default App;