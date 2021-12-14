import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const Login = () => {
  return (
    <h2>LOGIN.</h2>
  )
}

const FriendList = () => {
  return (
    <h2>FRIENDLIST.</h2>
  )
}

const AddFriend = () => {
  return (
    <h2>ADDFRIEND.</h2>
  )
}
 
function App() {
  return (
    <Router>
      <div className="App">
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
