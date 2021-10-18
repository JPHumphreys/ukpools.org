import React from 'react';
import Validator from '../components/validator';
import ServerStatus from '../components/serverStatus';
import CoinGecko from '../crypto/coingecko.png';

class Validators extends React.Component {
    render() {
        return (
            <div>
                <ServerStatus
                    name="CoinGecko"
                    icon={CoinGecko}
                />
                <Validator />
            </div>
        )
    }
}

export default Validators;