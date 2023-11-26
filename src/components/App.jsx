import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from "./app.module.css"

export function App() {
   
  
   return (
      <div className={css.container}>
        
        <h1 className={css.title}>Phonebook</h1>
        
        <ContactForm />
        
        <h1 className={css.title}>Contacts</h1>

        <Filter/>
        
        <ContactList />
       
      </div>

  )
  
}