import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import Validator from '../components/validator';

class PageManager extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <Validator />
            </div>
        );
    }
}

export default PageManager;