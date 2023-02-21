import React from 'react';
import '../../styles/PopupDisplay.css';
function PetStats(props) {
	// const { name, age, size, happiness } = props; //add correct props
	// let popupToRender = 'Nothing';

	return(
		<div className="popupDisplay">
			<h1>{name}</h1>
			<ul>
				<li>Name: props.name </li>
				<li>Age: props.age</li>
				<li>Size: props.size</li>
				<li>Happiness props.happiness</li>
			</ul>
		</div>
	); 
}
export default PetStats;