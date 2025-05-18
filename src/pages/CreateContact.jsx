import { ContactForm } from "../components/ContactForm"

export const CreateContact = ({ title }) => {
    const createContact = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/alejajaja/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                }),
            });

            const newContact = await response.json();
            console.log("Contacto creado:", newContact);
            dispatch({
                type: "add_contact",
                payload: { newContact }
            });

        } catch (error) {
            console.error("Error:", error);
        }
    };


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