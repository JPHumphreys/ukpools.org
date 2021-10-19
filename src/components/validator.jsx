import React from 'react';
import { Card } from 'react-bootstrap';
import './validator.css';

class Validator extends React.Component {

    state = {

    }

    render() {
        return (
            <Card className="validator validator-polkadot">
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.crypto}</Card.Subtitle>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Validator;

/*

                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>

*/