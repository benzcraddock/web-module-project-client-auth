import React, { useState } from 'react';
// for redirect
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddFriend = () => {
  const { push } = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");

    e.preventDefault();
    axios.post('http://localhost:9000/api/friends', formData, {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        push('/friends');
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h2>ADD FRIEND</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">FRIEND NAME</label>
          <input onChange={handleChange} name="name" id="name"/>
        </div>
        
        <div>
          <label htmlFor="email">FRIEND EMAIL</label>
          <input onChange={handleChange} name="email" id="email"/>
        </div>

        <div>
          <button>SUBMIT</button>
        </div>
        
      </form>
    </div>
    
  )
}

export default AddFriend;
