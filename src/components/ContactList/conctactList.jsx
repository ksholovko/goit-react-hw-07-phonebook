import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice';

import css from "./conctactList.module.css";
import ContactItem from "./contactItem"

export default function ContactList() {

    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.phonebook.contacts);
    const filter = useSelector((state) => state.filter.filters);

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    const deleteContact = (contactId) => {
        
        dispatch(remove(contactId));

   }

    return (
        <ul className={css.contactList}>
            {filteredContacts.map(({ id, name, number }) => (<li key={id} className={css.contactItem}>
                <ContactItem id={id} name={name} number={number} onDelete={() => deleteContact(id)} /> </li>))}
        </ul>
    )
}