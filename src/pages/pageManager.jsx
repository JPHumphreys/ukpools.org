import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import Validator from '../components/validator';

class PageManager extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <Validator currency="polkadot" />
            </div>
        );
    }
}

export default PageManager;