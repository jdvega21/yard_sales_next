import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext'
import flecha from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ setToggleOrders }) => {
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={flecha} alt="arrow"
					onClick={() => setToggleOrders(false)}
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${sumTotal()}</p>
			</div>
			<Link className="primary-button" href="checkout">
				Checkout
			</Link>
		</aside>
	);
}

export default MyOrder;