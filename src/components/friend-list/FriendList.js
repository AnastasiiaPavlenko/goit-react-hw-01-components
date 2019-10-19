import React from 'react';
import T from 'prop-types';
import friends from './friends.json';
import styles from './FriendList.module.css';

const isOnline = (styles) => {
    return <span className={styles.statusOnline} />;
};

const notOnline = (styles) => {
    return <span className={styles.status} />;
};

const FriendListItem = (props) => (
    props.friends.map(item => (
        <li className={styles.item} key={item.id}>
            {item.isOnline ? isOnline(styles) : notOnline(styles)}
            <img className={styles.avatar} src={item.avatar} alt="" width="48" />
            <p className={styles.name}>{item.name}</p>
        </li>
    ))
);

const FriendList = (props) => (
    <ul className={styles.friendList}>
        <>
            <FriendListItem friends={friends} />
        </>
    </ul>
);

FriendListItem.propTypes = {
    friends: T.arrayOf(T.shape({
        name: T.string.isRequired,
        avatar: T.string.isRequired,
        isOnline: T.bool.isRequired,
        id: T.number.isRequired
    }))
};

export default FriendList;
