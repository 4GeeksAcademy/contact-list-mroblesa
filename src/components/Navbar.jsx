import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/home">
					<span className="navbar-brand mb-0 h1">Alejajaja's Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/create-contact">
						<button className="btn btn-primary">Create new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};