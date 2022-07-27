import ContactsList from 'components/ContactsList';
import Form from 'components/Form';
import { BookContainer, Title } from './PhoneBook.styled';

const PhoneBook = ({
  title,
  onSubmit,
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
