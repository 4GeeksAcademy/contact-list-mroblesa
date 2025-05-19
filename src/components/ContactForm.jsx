import React, { useState } from 'react';

export const ContactForm = ({ title, onSubmit, onCancel, storeName, storePhone, storeEmail, storeAddress}) => {
    
    const [name, setName] = useState(storeName || '');
    const [phone, setPhone] = useState(storePhone ||''); 
    const [email, setEmail] = useState(storeEmail || '');
    const [address, setAddress] = useState(storeAddress || '');            
    
    const handleSubmit = (event) => {
        event.preventDefault();
       const body = { name, phone, email, address };
        onSubmit(body);
    }

    return (
     <div className="container-fluid p-4">
        <fieldset>
            <legend>{title}</legend>
            <form className="container-fluid" onSubmit={handleSubmit} >
                <div className="m-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder='Type name' onChange={(evnt)=> setName(evnt.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder='Type phone' onChange={(evnt)=> setPhone(evnt.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Type email' onChange={(evnt)=> setEmail(evnt.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder='Type address' onChange={(evnt)=> setAddress(evnt.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mx-2"
            
                >Submit</button>
                <button type="cancel" className="btn btn-danger"
                >Cancel</button>
            </form>
        </fieldset>
     </div>
    )
}