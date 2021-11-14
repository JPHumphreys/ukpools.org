import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer';
import MissionStatement from '../components/missionStatement';
import NavbarComponent from '../components/navbarComponent';
import Validators from './validators';
import './pageManager.css';

class PageManager extends React.Component {
    render() {
        return (
            <div className="page-manager-container">
                <NavbarComponent />
                <Container>
                    <MissionStatement />
                    <Validators />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default PageManager;