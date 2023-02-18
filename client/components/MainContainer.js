
import React, {useState} from 'react';
import '../styles/MainContainer.css';
import ButtonWrapper from './ButtonWrapper.js';
import PopupDisplayWrapper from './PopupDisplayWrapper.js';


//styles for main container will be set to false unless user is logged in.

function MainContainer(props) {

	// let popupToRender = 'Nothing';
	const [popupToRender, setPopupToRender] = useState('Nothing');
	const handleMenuClick = (event) => {
		console.log('clicked in main container', event.target.id);
    
		setPopupToRender(event.target.id);
	};

	return(
		<div className="mainContainer">
			{/* <Pet /> */}
			<ButtonWrapper handleClick={handleMenuClick} />
			<PopupDisplayWrapper popupToRender={ popupToRender } />
		</div>
	); 
}

export default MainContainer;