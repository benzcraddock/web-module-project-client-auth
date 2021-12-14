import React, { useState } from 'react';
// for redirect
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  // for redirect
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        push('/friend');
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input onChange={handleChange} name="username" id="username"/>
        </div>

        <div>
          <label htmlFor="password">PASSWORD</label>
          <input onChange={handleChange} name="password" id="password" type="password"/>
        </div>
        
        <div>
        <button>SUBMIT</button>
        </div>

      </form>
    </div>
    
  )
}

export default Login;