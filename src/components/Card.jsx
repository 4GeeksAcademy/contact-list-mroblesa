import { Link } from "react-router-dom"

export const Card = ({ id, name, phone, email, address, onEdit, onDelete }) => {
    

    return (
         <div className="card mb-3 d-flex" style={{ width: 540 }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">Address: {address}</p>
                        <div className="">
                        <Link to={`/edit-contact/${id}`}>
                        <button onClick={()=> onEdit()} className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={()=> onDelete()} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}