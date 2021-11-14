import React from 'react';
import './missionStatement.css';

class MissionStatement extends React.Component {
    render() { 
        return (
        <div className="mission-statment-container">
            <p className="mission-text">
                UK POOLS operates validation nodes on Proof-of-Stake crypto currencies.
            </p>
            <p className="mission-text">
                Our commitment is to secure decentralized blockchain networks with high availability and zero slashing.
            </p>
        </div>
        )
    }
}
 
export default MissionStatement;