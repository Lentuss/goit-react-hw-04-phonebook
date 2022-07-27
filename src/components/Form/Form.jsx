import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  ContactForm,
  FormLabel,
  LabelTitle,
  FormInput,
  AddButton,
} from './Form.styled';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    reset();
  };

  return (
    <ContactForm
      name="addContactForm"
      autocomplete="on"
      onSubmit={handleSubmit}
    >
      <FormLabel>
        <LabelTitle>Name</LabelTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInput}
          value={name}
          required
        />
      </FormLabel>

      <FormLabel>
        <LabelTitle>Number</LabelTitle>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInput}
          value={number}
          minlength="7"
          required
        />
      </FormLabel>

      <AddButton type="submit">+ Add to contacts</AddButton>
    </ContactForm>
  );
};

Form.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Form;
