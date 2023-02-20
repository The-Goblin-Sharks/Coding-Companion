import React from 'react';
import '../../styles/PopupDisplay.css';
// import cow from '../../assets/images/food/cow.png';
import cat from '../../assets/images/pets/cat/cat_idle.gif';
import dog from '../../assets/images/pets/dog/dog_idle.gif';
import trex from '../../assets/images/pets/trex/trex_idle.gif';


const food = require.context('../../assets/images/food', false, /\.(png|jpe?g|svg)$/);
const toys = require.context('../../assets/images/toys', false, /\.(png|jpe?g|svg)$/);
// const pets = require.context('../../assets/images/pets', true, /\.(png|jpe?g|svg|gif)$/);
// {images.keys().map((image, index) => (
// 	<img key={index} src={images(image)} alt={`Image ${index}`}
/*
"./cat/cat_idle.gif"
"./cat/cat_walking.gif"
"./dog/dog_idle.gif"
"./dog/dog_walk.gif"
"./trex/trex_idle.gif"
"./trex/trex_walking.gif"
*/


function Inventory(props) {
	const { name } = props;
	const petArr = [cat, dog, trex];
	// let popupToRender = 'Nothing';
	// const foodArr = [cow];
	// <li key={index}>
	// </li>

	return(
		<div className="popupDisplay">
			
			<h1 className="menuHeader">{ name }</h1>
		
			<div className='menuSection'>
				<h2>Food</h2>
				<div className="items">
					{food.keys().map((image, index) => (
						<img key={index} src={food(image)} alt={`Image ${index}`}/>
					))}
				</div>				
			</div>
			<div className='menuSection'>
				<h2>Toys</h2>
				<div className="items">
					{toys.keys().map((image, index) => (
						<img key={index} src={toys(image)} alt={`Image ${index}`}/>
					))}
				</div>				
			</div>
			<div className='menuSection'>
				<h2>Pets</h2>
				<div className="items">
					{/* <img src={petArr[0]} alt={'cat'}/> */}
					{petArr.map((image, index) => (
						<img key={index} src={image} alt={`Image ${index}`}/>
					))}
				</div>				
			</div>
		</div>
	); 
}
export default Inventory;


// client/assets/images/food/cow.png