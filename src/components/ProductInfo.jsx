import React from 'react';
import '@styles/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img
				src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="product_img"
				className="product-img"
			/>
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike AS20</p>
				<p>
					With its practical position, this bike has been created for keeping
					a maximum support.
				</p>
				<button className="primary-button add-to-card-button">
					<img src={addToCart} alt="add_to_cart" />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;