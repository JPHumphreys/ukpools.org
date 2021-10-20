import React from 'react';
import Validator from '../components/validator';
import { GetPolkadot } from '../api/CoinGecko';
import Crypto from '../dataObjects/crypto';


class Validators extends React.Component {

    state = {
        polkadot: new Crypto()
    }

    async componentDidMount() {
        const polkadotData = await GetPolkadot();

        const name = polkadotData.name;
        const price = polkadotData.market_data.current_price.gbp;
        const description = polkadotData.description.en;

        const polkadot = new Crypto(name, description, price);

        this.setState({
            polkadot: polkadot
        })
    }


    render() {
        return (
            <div>
                <Validator
                    name="UK POOL DOT"
                    crypto={this.state.polkadot.name}
                    description={this.state.polkadot.description}
                    price={this.state.polkadot.price}
                />
            </div>
        )
    }
}

export default Validators;