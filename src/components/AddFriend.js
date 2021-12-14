import React from 'react';

const AddFriend = () => {
  return (
    <div>
      <h2>ADD FRIEND</h2>
      <form>
        <div>
          <label htmlFor="name">FRIEND NAME</label>
          <input id="name"/>
        </div>
        
        <div>
          <label htmlFor="email">FRIEND EMAIL</label>
          <input id="email"/>
        </div>

        <div>
          <button>SUBMIT</button>
        </div>
        
      </form>
    </div>
    
  )
}

export default AddFriend;
