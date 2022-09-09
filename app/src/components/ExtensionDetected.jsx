import React from "react";

import WikaWidget from './WikaWidget';
import AccountNotDetected from  './AccountNotDetected';

class ExtensionDetected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account: null
        };
    }

    componentDidMount = () => {
        this.getAccount() ;
    }

     getAccount = () => {
        window.WIKA_BRIDGE.account((account) => {
            this.setState({account: account}) ;
        }) ;
    }

    render() {
        if (this.state.account) {
            return <WikaWidget account={this.state.account}/>
        } else {
            return <AccountNotDetected />
        }
    }

}

export default ExtensionDetected;
