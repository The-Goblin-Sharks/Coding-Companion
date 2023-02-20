import React from 'react';
import '../../styles/PopupDisplay.css';
// import cow from '../../assets/images/food/cow.png';

const food = require.context('../../assets/images/food', false, /\.(png|jpe?g|svg)$/);
const toys = require.context('../../assets/images/toys', false, /\.(png|jpe?g|svg)$/);

// {images.keys().map((image, index) => (
// 	<img key={index} src={images(image)} alt={`Image ${index}`}


function Inventory(props) {
	const { name } = props;
	// let popupToRender = 'Nothing';
	// const foodArr = [cow];
	// <li key={index}>
	// </li>

	return(
		<div className="popupDisplay">
			<h1 className="menuHeader">{ name }</h1>
			{/* <ul className="menuList"> */}
			{/* <br/>  */}
			{/* <img alt='cow' src={cow}/> */}
			{/* {foodArr.map((el, i) => <li key={i}><img alt={'cow'} src={el} /></li>)}  */}
			<div className='menuSection'>
				<h2>Food</h2>
				<div className="foodItems">
					{food.keys().map((image, index) => (
						<div key={index}>
							<img key={index} src={food(image)} alt={`Image ${index}`}/>
						</div>
					))}
				</div>				
			</div>
	
			
			
		</div>
	); 
}
export default Inventory;


// client/assets/images/food/cow.png