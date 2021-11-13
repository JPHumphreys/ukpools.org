import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/navbarComponent';
import Validators from './validators';

class PageManager extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <Container>
                    <Validators />
                </Container>
            </div>
        );
    }
}

export default PageManager;