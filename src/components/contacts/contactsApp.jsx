import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsSlice';
import {
  addContacts,
  deleteContacts,
  getContacts,
} from '../../redux/operaction';
import Filter from '../filter/filter';
import Contact from '../list/contact';
import ContactForm from '../form/contactForm';
import css from './contactsApp.module.css';

const ContactsApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(contact =>
      contact.name
        ? contact.name.toLowerCase().includes(normalizedFilter)
        : false
    );
  };
  const filteredContacts = getFilteredContacts();

  const addContact = ({ name, number }) => {
    const newContact = { name, number };
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts.`);
    } else {
      console.log(newContact);
      dispatch(addContacts(newContact));
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <ContactForm onSubmit={addContact} className={css.addContactForm} />
      <Filter
        value={filter}
        onChange={handleChangeFilter}
        className={css.filterInput}
      />
      <ul className={css.contactList}>
        {filteredContacts.map(con => (
          <Contact
            key={con.id}
            contact={con}
            handleClick={deleteContact}
            className={css.contactItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsApp;
