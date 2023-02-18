import React from 'react';
import '../../styles/PopupDisplay.css';
function Inventory(props) {
	const { name } = props;
	// let popupToRender = 'Nothing';

	return(
		<div className="popupDisplay">
			<h1>{name}</h1>
		</div>
	); 
}
export default Inventory;