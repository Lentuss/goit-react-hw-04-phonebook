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

const ContactsList = ({
  filteredContacts,
  title,
  filterValue,
  onFilter,
  onDelete,
}) => {
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

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
