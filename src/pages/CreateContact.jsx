import { ContactForm } from "../components/ContactForm"

export const CreateContact = ({title}) => {
    const createContact = (body) => {
       fetch('https://playground.4geeks.com/contact/agendas/alejajaja/contacts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })}
    return (
        <div>
            <h1>{title}</h1>
            <ContactForm 
            title={"Create new contact"}
            onSubmit={createContact}
             />
        </div>
    )
}