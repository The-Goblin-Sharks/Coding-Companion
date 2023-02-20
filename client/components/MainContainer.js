
import React, {useState, Fragment} from 'react';
import '../styles/MainContainer.css';
import ButtonWrapper from './ButtonWrapper.js';
import PopupDisplayWrapper from './PopupDisplayWrapper.js';
import LoginWrapper from './LoginWrapper.js';
import Pet from './Pet';

//styles for main container will be set to false unless user is logged in.

function MainContainer(props) {

	// let popupToRender = 'Nothing';
	const [popupToRender, setPopupToRender] = useState('Nothing');
	const [isLoggedIn, setIsLoggedIn] = useState(true);
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
			{isLoggedIn ? <Fragment>
				<button onClick={() => setIsLoggedIn(!isLoggedIn)}>render login</button>
				<Pet/>
				<ButtonWrapper handleClick={handleMenuClick} />
				<PopupDisplayWrapper popupToRender={popupToRender} /> 
			</Fragment> : <LoginWrapper setLoggedIn={setIsLoggedIn} />}
		</div>
	); 
}

export default MainContainer;