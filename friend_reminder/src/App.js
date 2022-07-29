import React, {useState} from 'react';
import AddFriends from './Components/AddFriends';
import FriendsList from './Components/FriendsList';





function App() {

  const [friendsList, setFriendsList] = useState([]);

  const ExpandFriendList = (name, age) => {
    setFriendsList((friendsList) => {
      return [...friendsList, {name: name, age: age, id: Math.random().toString()}];
    })
  }


  
  return (
    <React.Fragment>
      <AddFriends onAddFriend={ExpandFriendList} />
      <FriendsList friends={friendsList}/>
    </React.Fragment>
  )
}

export default App;
