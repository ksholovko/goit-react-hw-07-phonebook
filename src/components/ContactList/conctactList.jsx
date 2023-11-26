import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/operations'
import ContactItem from "./contactItem"
import css from "./conctactList.module.css"
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';

export default function ContactList() {

    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);

    const filter = useSelector(selectFilter);

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    const deleteContactItem = (contactId) => {
        
        dispatch(deleteContact(contactId));

   }

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className={css.contactList}>
                    {filteredContacts.map(({ id, name, phone }) => (
                        <li key={id} className={css.contactItem}>
                            <ContactItem id={id} name={name} phone={phone} onDelete={() => deleteContactItem(id)} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}