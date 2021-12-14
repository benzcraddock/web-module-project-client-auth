import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
 
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>FRIENDS DATABASE</h2>
          <Link className="link" to="login">LOGIN</Link>
          <Link className="link" to="friend">FRIEND LIST</Link>
          <Link className="link" to="friend/add">ADD FRIEND</Link>
          <Link className="link" to="logout">LOGOUT</Link>

        </header>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>

        <Route exact path="/friend">
          <FriendList/>
        </Route>

        <Route exact path="/friend/add">
          <AddFriend/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
