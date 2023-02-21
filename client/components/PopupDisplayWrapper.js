/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import '../styles/PopupDisplayWrapper.css';
// import PopupDisplay from '../components/PopupDisplay.js';
import Algos from '../components/menuTypes/Algos.js';
import Inventory from '../components/menuTypes/Inventory.js';
import PetStats from '../components/menuTypes/PetStats.js';
import Store from '../components/menuTypes/Store.js';

// props.userInfo.currentUser.user_id

function PopupDisplayWrapper(props) {
	let singleRender;

	const { popupToRender } = props;
	console.log('rendered in display wrapper', popupToRender);

	const [userInventory, setUserInventory] = useState(null);
	const [storeInventory, setStoreInventory] = useState(null);
	
	useEffect(function() {
		async function getInventory() {
			let response = await fetch(`/inventory/${props.userInfo.currentUser.user_id}`);
			let inventory = await response.json();
			setUserInventory(inventory);
		}
		try{
			getInventory();
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(function() {
		async function getStoreInventory() {
			let response = await fetch('/inventory');
			let storeInventory = await response.json();
			setStoreInventory(storeInventory);
		}
		try{
			getStoreInventory();
		} catch (error) {
			console.error(error);
		}
	}, []);



	// const [currentDisplay, setCurrentDisplay] = useState(popupToRender);
	switch (popupToRender) {
	case 'Nothing':
		singleRender = false;
		break;
	case 'Inventory':
		singleRender = <Inventory 
			name='Inventory'
			inventory={userInventory}
		/>;
		break;
	case 'Algos':
		singleRender = <Algos name='Algos'/>;
		break;
	case 'Store':
		singleRender = <Store 
			name='Store'
			storeItems={storeInventory}
			// userInfo={props.userInfo.currentUser}
		/>;
		break;
	case 'Pet Stats':
		singleRender = <PetStats name='Pet Stats'/>;
		break;
	default:
		singleRender = false;
	}
	return(
		<div className={`popupDisplayWrapper ${singleRender ? 'visible': ''}`}>
			{singleRender}
		</div>
	); 
}

export default PopupDisplayWrapper;