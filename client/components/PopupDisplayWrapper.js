/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import '../styles/PopupDisplayWrapper.css';
import PopupDisplay from '../components/PopupDisplay.js';
import Algos from '../components/menuTypes/Algos.js';
import Inventory from '../components/menuTypes/Inventory.js';
import PetStats from '../components/menuTypes/PetStats.js';
import Store from '../components/menuTypes/Store.js';

function PopupDisplayWrapper(props) {
	let singleRender;

	const { popupToRender } = props;
	console.log('rendered in display wrapper', popupToRender);

	// const [currentDisplay, setCurrentDisplay] = useState(popupToRender);
	switch (popupToRender) {
	case 'Nothing':
		singleRender = false;
		break;
	case 'Inventory':
		singleRender = <Inventory name='Inventory'/>;
		break;
	case 'Algos':
		singleRender = <Algos name='Algos'/>;
		break;
	case 'Store':
		singleRender = <Store name='Store'/>;
		break;
	case 'Pet Stats':
		singleRender = <PetStats name='Pet Stats'/>;
		break;
	default:
		singleRender = <PopupDisplay />;
	}
	return(
		<div className={`popupDisplayWrapper ${singleRender ? 'visible': ''}`}>
			{singleRender}
		</div>
	); 
}

export default PopupDisplayWrapper;