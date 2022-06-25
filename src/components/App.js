import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';
import Header from './Header'
import AddContect from './AddContect'
import ContectList from './ContectList'

function App() {
  // const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: v4(), ...contact}]);
  }

  const removeContact = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContacts)
  }

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className='ui container'>
        <Header />
      <AddContect addContactHandler={addContactHandler} />
      <ContectList contact={contacts} handler={removeContact} />
    </div>
  );
}

export default App;
