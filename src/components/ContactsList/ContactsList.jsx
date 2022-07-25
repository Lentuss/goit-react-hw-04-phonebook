import PropTypes from 'prop-types';
import Filter from '../Filter';

import {
  Contacts,
  List,
  ListTitle,
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
  Marker,
} from './ContactsList.styled';

const ContactsList = ({ contacts, title, filterValue, onFilter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return (
    <Contacts>
      <ListTitle>{title}</ListTitle>
      <Filter filter={filterValue} onFilter={onFilter} />

      <List>
        {filteredContacts.map(contact => (
          <Contact key={contact.id}>
            <Marker>&#9742; </Marker>
            <ContactName>{contact.name}: </ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <DeleteButton
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              x Delete
            </DeleteButton>
          </Contact>
        ))}
      </List>
    </Contacts>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onFilter: PropTypes.func,
  onDelete: PropTypes.func,
};
