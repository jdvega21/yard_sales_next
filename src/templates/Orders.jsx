import React from 'react';
import OrderInfo from '@components/OrderInfo';
import '@styles/Orders.scss';

const Orders = () => {
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					<OrderInfo />
				</div>
			</div>
		</div>
	);
}

export default Orders;