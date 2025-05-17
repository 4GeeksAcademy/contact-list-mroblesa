import { string } from "prop-types";

export const initialStore=()=>{
  return{
    contacts:[
      {
        name: string,
        image: string,
        phone: string,
        email: string,
        id: string
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_contacts': {
      const { contacts } = action.payload;
      return {
        ...store,
        contacts: contacts
      }

    }
    case 'delete_contact': {
      const { id } = action.payload;
      const newContacts = store.contacts.filter(contact => contact.id !== id);
      return {
        ...store,
        contacts: newContacts
      }
    }

    default:
      return store;
  }    


}
