import React from 'react';
import '@styles/SendEmail.scss';
import email from '@icons/email.svg';
import yardSaleLogo from '@logos/logo_yard_sale.svg';

const SendEmail = () => {
	return (
		<div class="SendEmail">
        <div class="SendEmail-container">
            <img class="logo" src={yardSaleLogo} alt="logo"/>
            <h1 class="title">Email has been sent!</h1>
            <p class="subtitle">Please check your inbox for instructions on how to reset your password</p>
        
            <div class="email-image">
                <img src={email} alt="email"/>
            </div>

            <button class="primary-button login-button">Login</button>
            <p class="resend">
                <span>Didn't receive the email?</span>
                <a href="./">Resend</a>
            
            </p>
        </div>
    </div>
	);
}

export default SendEmail;