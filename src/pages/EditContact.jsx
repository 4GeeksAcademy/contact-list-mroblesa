import { ContactForm } from "../components/ContactForm"
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const EditContact = ({title}) => {
    const { id } = useParams();
    const { store } = useGlobalReducer();

    const selectedContact = store.contacts.filter(contact => contact.id === id);


    const editContact = (body, id ) => {
        fetch(`https://playground.4geeks.com/contact/agendas/alejajaja/contacts/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };

    return (
        <div>
            {title}
            <ContactForm 
            title={'Edit Contact'}
            key={selectedContact.id}
            onSubmit={editContact}
            storeName={selectedContact.name}
            storePhone={selectedContact.phone}
            storeEmail={selectedContact.email}
            storeAddress={selectedContact.address}
             />
        </div>
    )
}