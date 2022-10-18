import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'
import UserList from './components/userList';


import 'react-edit-text/dist/index.css';
import DefaultUsers from './components/defaultUsers';

const App  = () => {
  const [users, setUser] = useState()

  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users/1").then((result) => {
  setUser(result.data)
  });
  }, []);

  return (
  <div className="App ">
    {users ? <UserList user={users}/> : <DefaultUsers/> }
  </div>
  );
  }

export default App;