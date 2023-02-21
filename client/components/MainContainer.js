
import React, {useState, Fragment, useEffect	} from 'react';
import '../styles/MainContainer.css';
import ButtonWrapper from './ButtonWrapper.js';
import PopupDisplayWrapper from './PopupDisplayWrapper.js';
import LoginWrapper from './LoginWrapper.js';
import Pet from './Pet';

//styles for main container will be set to false unless user is logged in.

function MainContainer(props) {

	// let popupToRender = 'Nothing';
	const [popupToRender, setPopupToRender] = useState('Nothing');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [userInventory, setUserInventory] = useState(null);
	

	useEffect(function() {
		if (!userInfo) return;
		async function getInventory() {
			let response = await fetch(`/inventory/${userInfo.currentUser.user_id}`);
			let inventory = await response.json();
			console.log('logged in inventory: ', inventory);
			setUserInventory(inventory);
		}
		try{
			getInventory();
		} catch (error) {
			console.error(error);
		}
	}, [isLoggedIn]);

	
	const handleMenuClick = (event) => {
		console.log('clicked in main container', event.target.id);
		if(event.target.id === popupToRender) {
			setPopupToRender('Nothing');
		} else {
			setPopupToRender(event.target.id);
		}
	};
	
	return(
		<div className="mainContainer">
			{isLoggedIn && userInfo && userInventory ? <Fragment>				
				<ButtonWrapper handleClick={handleMenuClick} />
				<PopupDisplayWrapper
					userInfo={userInfo}
					popupToRender={popupToRender}
					userInventory={userInventory}
				/> 
				<Pet 
					userInventory={userInventory}
				/>
			</Fragment> : <LoginWrapper setUserInfo={setUserInfo} setLoggedIn={setIsLoggedIn}/>}
		</div>
	); 

}




export default MainContainer;

{/* <Component {...props}/> */}