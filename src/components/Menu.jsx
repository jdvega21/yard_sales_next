import React from 'react';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<a href="./" className="tittle">
						My Orders
					</a>
				</li>
				<li>
					<a href="./" className="tittle">
						My Account
					</a>
				</li>
				<li>
					<a href="./" className="tittle">
						Sign Out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;