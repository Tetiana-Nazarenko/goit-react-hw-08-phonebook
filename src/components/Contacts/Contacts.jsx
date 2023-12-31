import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ContactsList, DeleteButton, ContactItem } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  //const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name + ':' + contact.number}
          {
            <DeleteButton
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete{' '}
            </DeleteButton>
          }
        </ContactItem>
      ))}
    </ContactsList>
  );
};
//export default Contacts;
