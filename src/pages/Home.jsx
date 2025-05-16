import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<Card 
			name={'Aleja'}
			phone={'11222333'}
			email={'aleja@aleja.es'}
			address={'Calle de la Aleja'}
			onEdit={() => {}}
			onDelete={() =>{}}
			/>
			
		</div>
	);
}; 