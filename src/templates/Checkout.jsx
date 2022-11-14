import React from 'react';
import ShoppingCartItem from '@components/ShoppingCartItem';
import '@styles/Checkout.scss';
import  flecha from '@icons/flechita.svg';
const Checkout = () => {
	return (
		<aside className="Checkout">
			<div className="Checkout-container">
				<img src={flecha} alt="arrow"/>
					<p className="Checkout-title">Shopping Cart</p>
			</div>
			<div className="Checkout-content">
			<ShoppingCartItem />
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">Checkout</button>
			</div>
		</aside>
	);
}

export default Checkout;