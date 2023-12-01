import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import ContacsForm from 'components/ContactsForm/ContactsForm';
import ContactItem from 'components/ContactItem/ContactItem';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { getAllContacts } from 'redux/contacts/operation';
import { selectIsLoading } from 'redux/contacts/selectors';

export const ContactContainer = styled.div`
  width: 700px;
  color: white;
  background-color: #2b3035;
  padding: 15px;
  margin: 0 auto;
  border-radius: 8px;
`;

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <ContacsForm />
      <ContactContainer>
        <Filter />
        {isLoading && <Loader />}
        <ContactItem />
      </ContactContainer>
    </>
  );
};

export default Contacts;
