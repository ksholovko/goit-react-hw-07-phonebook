import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, fetchContacts } from "redux/operations";
import { nanoid } from "nanoid";
import css from "./contactForm.module.css"
import { selectContacts } from "redux/selectors";

export default function ContactForm() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameInputId = nanoid();
    const telInputId = nanoid();


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleInputChange = event => {
    
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setName(value);
                break;
        
            case "phone":
                setPhone(value);
                break;
         
            default:
                break;
        }
    }

    const handleSubmit = event => {
    
        event.preventDefault();
        const newContact = { name, phone };
        
        if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
    alert(`${newContact.name} is already in the contacts`);
    return;
        }
        
        dispatch(addContact(newContact));
      setName('');
      setPhone('');
    }

return ( 
            
    <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.label}> Name </label>
        <input className={css.formInput} id={nameInputId} type="text" name="name" value={name} required onChange={handleInputChange} />
        <label htmlFor={telInputId} className={css.label}>Number</label>
        <input className={css.formInput} id={telInputId} type="tel" name="phone" value={phone} required onChange={handleInputChange} />     
        <button className={css.button} type="submit">Add contact</button>
    </form>
    
        )
}
