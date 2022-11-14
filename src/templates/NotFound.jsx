import React from 'react';
import '@styles/NotFound.scss';
import notfound from '@icons/404_error.svg';
import yardSaleLogo from '@logos/logo_yard_sale.svg';

const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="NotFound-container" action="/">
                <img className="logo" src={yardSaleLogo} alt="logo"/>
                <h1 className="title">Page Not Found. Error 404!</h1>
                <p className="subtitle">Please ensure you are looking at the correct resource</p>
                <div className="NotFound-image">
                    <img src={notfound} alt="error-404"/>
                </div>
                <button className="primary-button">Back to Main Page</button>
            </div>
        </div>
    );
};

export default NotFound;