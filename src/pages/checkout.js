import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ShoppingCartItem from '@components/ShoppingCartItem';
import flecha from '@icons/flechita.svg';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <aside className={styles['Checkout']}>
        <div className={styles['Checkout-container']}>
          <Image src={flecha} alt="arrow" />
          <p className={styles['Checkout-title']}>Shopping Cart</p>
        </div>
        <div className={styles['Checkout-content']}>
          <ShoppingCartItem />
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>
          <button className={styles['primary-button']}>Checkout</button>
        </div>
      </aside>
    </>
  );
};

export default Checkout;
