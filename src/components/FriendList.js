import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
    })
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
