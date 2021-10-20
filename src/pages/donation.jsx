import React from 'react';
import '../data/donation.json';
import NavbarComponent from '../components/navbarComponent';

class Donation extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
            </div>
        );
    }
}

export default Donation;
