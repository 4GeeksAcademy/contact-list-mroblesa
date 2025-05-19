import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/alejajaja/contacts"
        );
        if (!response.ok) throw new Error("Error en la solicitud");
        const data = await response.json();
        dispatch({
          type: "load_contacts",
          payload: {
            contacts: data.contacts || [],
          },
        });
      } catch (error) {
        console.error("Error obteniendo contactos:", error);
        dispatch({
          type: "load_contacts",
          payload: {
            contacts: [],
          },
        });
      }
    };
    getContacts();
    console.log("Contactos cargados", store.contacts);
  }, []);

  const deleteContact = (id) => {
    fetch(
      `https://playground.4geeks.com/contact/agendas/alejajaja/contacts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          dispatch({ type: "delete_contact", payload: { id } });
        } else {
          console.error("Error eliminando contacto");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="text-center mt-5">
      {store.contacts.map((contact) => (
        <Card
          name={contact.name}
          image={rigoImageUrl}
          id={contact._id}
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
          onEdit={() => navigate(`/edit-contact/${contact._id}`)}
          onDelete={() => deleteContact(contact._id)}
        />
      ))}
    </div>
  );
};