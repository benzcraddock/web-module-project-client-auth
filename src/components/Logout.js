import React, { useEffect } from 'react';
// for redirect
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        localStorage.removeItem("token");
        push('/login');
      })
      .catch(err => {
        console.error(err);
      }) 
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Logout;
