
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
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [userInfo, setUserInfo] = useState(null);
	
	console.log(userInfo);


	
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
				<Pet 
					
				/>
				<ButtonWrapper handleClick={handleMenuClick} />
				<PopupDisplayWrapper
					userInfo={userInfo}
					popupToRender={popupToRender}

					// {...userInventory}//whatever we are going to call this
				/> 
			</Fragment> : <LoginWrapper setUserInfo={setUserInfo} setLoggedIn={setIsLoggedIn} />}
		</div>
	); 
}

export default MainContainer;

{/* <Component {...props}/> */}