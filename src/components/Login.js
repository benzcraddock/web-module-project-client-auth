import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input id="username"/>
        </div>

        <div>
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password"/>
        </div>
        
        <div>
        <button>SUBMIT</button>
        </div>

      </form>
    </div>
    
  )
}

export default Login;