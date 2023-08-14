import { useState, useEffect } from 'react';
import './App.css';
import UserForm from './components/form/UserForm';
import UserList from './components/list/UserList';

function App() {

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [value, setValue] = useState('');

    const filterHendler = (e) => {
        setValue(e.target.value)
    }

    const filteredUsers = users.filter(user => {
      return user.firstName.toLowerCase().includes(value.toLowerCase())
    })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addNewUserHandler = (firstName, lastName, phone, email) => {
    setUsers((prevUser) => {
      const updatedUser = [...prevUser];
      updatedUser.unshift({ firstName: firstName, lastName: lastName, phone: phone, email: email, id: Math.random().toString() });
      return updatedUser;
    });
  }

  const removeHandler = (userId) => {
    setUsers((prevUser) => {
      const updatedUsers = prevUser.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  }

  const editUserHandler = (userId, updatedName, updatedLastName) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          firstName: updatedName,
          lastName: updatedLastName,
        };
      }
      return user;
    });
  
    setUsers(updatedUsers);
  };

  return (
    <section>
      <UserForm onAddUser={addNewUserHandler} onSearch={filterHendler} />
      <UserList users={users} onRemoveHandler={removeHandler} onEditUser={editUserHandler} filtered={filteredUsers}/>
    </section>
  );
}

export default App;
