import React, { useState } from 'react';

export const ContactForm = ({ title, onSubmit, storeName, storePhone, storeEmail, storeAddress}) => {
    
    const [name, setName] = useState(storeName || "");
    const [phone, setPhone] = useState(storePhone ||""); 
    const [email, setEmail] = useState(storeEmail || "");
    const [address, setAddress] = useState(storeAddress || "");            
    
    return (
     <div className="container-fluid p-4">
        <fieldset>
            <legend>{title}</legend>
            <form className="container-fluid">
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
                onClick={() => {
                    onSubmit(
                        {
                        storeName: name,
                        storePhone: phone,
                        storeEmail: email,
                        storeAddress: address
                    });
                }}
                >Submit</button>
                <button type="submit" className="btn btn-danger"
                onClick={(evnt) => {
                    evnt.preventDefault();
                    setName('');
                    setPhone('');
                    setEmail('');
                    setAddress('');
                }}
                >Cancel</button>
            </form>
        </fieldset>
     </div>
    )
}