import React from 'react';
import { Card } from 'react-bootstrap';
import './validator.css';

class Validator extends React.Component {

    state = {
        currency: this?.props?.currency
    }

    render() {
        return (
            <Card className="validator validator-polkadot">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.currency}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default Validator;