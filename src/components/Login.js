import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"/>
        </div>
        
        <div>
        <button>Submit</button>
        </div>

      </form>
    </div>
    
  )
}

export default Login;