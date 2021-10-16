import React from 'react';

class ServerStatus extends React.Component {

    state = {
        name: "",
        icon: "",
        status: false
    }

    render() {
        return (
            <div className="server-status-container">
                <div className="server-status-name">

                </div>
                <div className="server-status-icon">

                </div>
                <div className="server-status-status">

                </div>
            </div>
        )
    }
}

export default ServerStatus;