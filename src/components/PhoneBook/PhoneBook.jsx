import PropTypes from 'prop-types';
import ContactsList from 'components/ContactsList';
import Form from 'components/Form';
import { BookContainer, Title } from './PhoneBook.styled';

const PhoneBook = ({
  title,
  onSubmit,
  contacts,
  filterValue,
  filteredContacts,
  onFilter,
  onDelete,
}) => {
  return (
    <BookContainer>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit} />

      <ContactsList
        title={'Contacts'}
        filterValue={filterValue}
        filteredContacts={filteredContacts}
        onFilter={onFilter}
        onDelete={onDelete}
      />
    </BookContainer>
  );
};

export default PhoneBook;

PhoneBook.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filterValue: PropTypes.string,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onFilter: PropTypes.func,
  onDelete: PropTypes.func,
};
