import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Card = ({ id, image, name, phone, email, address, onEdit, onDelete }) => {
    

    return (
         <div className="card d-flex container-fluid mb-4" style={{ width: 540 }}>
            <div className="row g-0 ">
                <div className="col-md-4" style={{ padding: "10px" }}>
                    <img src={image} className="img-fluid rounded-circle " alt="..." />
                </div>
                <div className="col-md-8 d-flex text-start">
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <p className="mx-1"><FontAwesomeIcon icon={faPhone} /> Phone: {phone}</p>
                        <p className="mx-1"><FontAwesomeIcon icon={faEnvelope} /> Email: {email}</p>
                        <p className="mx-1"><FontAwesomeIcon icon={faLocationDot} /> Address: {address}</p>
                    </div>
                    <div className="m-3 ">
                        <Link to={`/edit-contact/${id}`}>
                        <FontAwesomeIcon icon={faPencil} onClick={()=> onEdit()} className="px-4"/>
                        </Link>
                        <FontAwesomeIcon icon={faTrash} onClick={()=> onDelete()} className="trash"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}