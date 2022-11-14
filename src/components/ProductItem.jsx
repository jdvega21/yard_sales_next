import React, {useContext} from "react";
import Image from "next/image";
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from "@styles/ProductItem.module.scss";

const ProductItem = ({product}) => {
	const {state, addToCart, removeFromCart} = useContext(AppContext);
	const handleClick = item => {
		!state.cart.includes(item)
								? addToCart(item)
								: removeFromCart(item);
	}
	return (
		<div className={styles.ProductItem}>
			<Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={100} height={100} layout="responsive"/>
			<div className={styles['ProductItem-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{	state.cart.includes(product) 
													? <Image src={addedToCartImage} alt="add-to-card" />
													: <Image src={addToCartImage} alt="add-to-card" />
					}
					
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
