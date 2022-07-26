import PhoneBook from './PhoneBook';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dataHandler = (name, number) => {
    const newId = nanoid();
    const names = contacts.map(contact => contact.name.toLowerCase());

    if (names.includes(name.toLowerCase())) {
      alert(`Please, enter unique name. ${name} is already exist`);
      return;
    } else {
      setContacts([...contacts, { id: newId, name, number }]);
    }
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase().trim());
  };

  const getFilteresContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <PhoneBook
      contacts={contacts}
      title={'Phonebook'}
      filterValue={filter}
      filteredContacts={getFilteresContacts()}
      onSubmit={dataHandler}
      onFilter={handleFilter}
      onDelete={handleDelete}
    />
  );
};

export default App;
