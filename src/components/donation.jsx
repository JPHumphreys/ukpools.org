import React from 'react';

class Donation extends React.Component {

    state = {}
    render() {

        const image = this.props.image;

        return
        (
            <div className="donation-container">
                <img src={image.src} alt={image.alt} />
            </div>
        );
    }
}

export default Donation;