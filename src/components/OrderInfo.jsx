import React from 'react';
import '@styles/OrderInfo.scss';
import flecha from '@icons/flechita.svg';

const OrderInfo = () => {
	return (
		<div className="OrderInfo">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={flecha} alt="arrow" />
		</div>
	);
}

export default OrderInfo;