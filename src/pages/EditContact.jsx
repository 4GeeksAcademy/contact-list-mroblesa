import { ContactForm } from "../components/ContactForm"
import { useParams } from "react-router-dom";

export const EditContact = () => {
    const {id} = useParams()
    return (
        <div>
            Edit Contact
            <ContactForm title={'Edit Contact'}
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