import React from 'react'
import PropTypes from 'prop-types'
import css from "./FriendListItem.module.css";


const FriendList = ({ friends, func }) => {
    
    return (
        <ul className={css.friendList}>
  {friends.map( friend => (func(friend)))}
        </ul>
    )
}


export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired 
}