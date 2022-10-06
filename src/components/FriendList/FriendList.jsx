import React from 'react'
import PropTypes from 'prop-types'
import css from "./FriendListItem.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.friendList}>
  {friends.map( friend => (FriendListItem(friend)))}
        </ul>
    )
}


export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired 
}