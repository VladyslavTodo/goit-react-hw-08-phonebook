import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContacsForm from 'components/ContactsForm/ContactsForm';
import ContactItem from 'components/ContactItem/ContactItem';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { getAllContacts } from 'redux/contacts/operation';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <ContacsForm />
      <Filter />
      {isLoading && <Loader />}
      <ContactItem />
    </>
  );
};

export default Contacts;
