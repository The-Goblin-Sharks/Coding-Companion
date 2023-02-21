import React from 'react';
import '../../styles/PopupDisplay.css';
function Algos(props) {
	const { name } = props;
	// let popupToRender = 'Nothing';

	return(
		<div className="popupDisplay">
			<h1>{name}</h1>
			<ul>
				<li>Easy:</li>
				<li>Medium:</li>
				<li>Hard:</li>
			</ul>
		</div>
	); 
}
export default Algos;