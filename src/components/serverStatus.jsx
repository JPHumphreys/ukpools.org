import React from 'react';
import './serverStatus.css';
import Ping from '../api/CoinGecko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

class ServerStatus extends React.Component {

    state = {
        name: "",
        icon: "",
        status: false
    }

    async componentDidMount() {
        const status = await Ping();

        this.setState({
            status: status
        });
    }

    render() {

        let iconStyle;

        if (this.state.status) {
            iconStyle = {
                color: "green",
            }
        }
        else {
            iconStyle = {
                color: "red",
            }
        }



        return (
            <div className="server-status-container">
                <div className="server-status server-status-name">
                    <p>{this.props.name}</p>
                </div>
                <div className="server-status server-status-status">
                    <FontAwesomeIcon icon={faPowerOff} style={iconStyle} size="lg" />
                </div>
            </div>
        )
    }
}

export default ServerStatus;