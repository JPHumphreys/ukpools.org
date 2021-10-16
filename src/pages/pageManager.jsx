import React from 'react';
import NavbarComponent from '../components/navbarComponent';
import Validators from './validators';

class PageManager extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <Validators />
            </div>
        );
    }
}

export default PageManager;