import { ContactForm } from "../components/ContactForm"

export const CreateContact = () => {
    return (
        <div>
            <h1>Create new contact</h1>
            <ContactForm
            title={"Create new contact"}
            onSubmit={() => {}}
            onChange={() => {}}
            formData={{
                name: "",
                phone: "",
                email: "",
                address: ""
            }}
             />
        </div>
    )
}