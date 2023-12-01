import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact, getAllContacts } from 'redux/contacts/operation';

import { Button, WrapperUl } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <WrapperUl>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{' '}
            <a href={`tel:${contact.number}`} tel="">
              {contact.number}
            </a>
          </p>

          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </WrapperUl>
  );
};

export default ContactItem;
