import React from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
	return (
		<div className={styles.ShoppingCartItem}>
			<figure>
				<Image
					src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="bike"
					width={100} height={100} 
				/>
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<Image src={close} alt="close" />
		</div>
	);
};

export default ShoppingCartItem;