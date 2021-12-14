import React, { useState, useEffect } from 'react';

// axiosWithAuth
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axiosWithAuth().get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      <h2>FRIENDS LIST</h2>
      <ul>
        {
          friends.map(friend => {
            return <li>{friend.name} - {friend.email}</li>
          })
        }
      </ul>
    </div>
  )
}

export default FriendList;
