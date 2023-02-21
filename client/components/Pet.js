import React, {useState, useEffect} from 'react';
import '../styles/pet.css';
import cat from '../assets/images/pets/cat/cat_idle.gif';

function Pet(props) {
	const [petXPosition, setPetXPosition] = useState(0);
	const [petYPosition, setPetYPosition] = useState(0);

	useEffect(() => {
		const handleKeyDown = (event) => {
			switch (event.key) {
			case 'ArrowUp':
				setPetYPosition(petYPosition - 100);
				break;
			case 'ArrowDown':
				setPetYPosition(petYPosition + 100);
				break;
			case 'ArrowRight':
				setPetXPosition(petXPosition + 100);
				break;
			case 'ArrowLeft':
				setPetXPosition(petXPosition - 100);
				break;
		
			default:
				break;
			}
			
			console.log(event.key);
			console.log(petXPosition)
			console.log(petYPosition)
		};
	
		document.addEventListener('keydown', handleKeyDown);
	
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [petXPosition, petYPosition]);

	return(
		<div className="petStyle" style={
			{
				top: `${petYPosition}px`, 
				left: `${petXPosition}px`,
				// backgroundColor: 'red'
			}
		}>
			<img src={cat} alt='cat' />
		</div>
	); 
}

export default Pet;