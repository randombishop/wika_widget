import React from "react";


import './App.css';
import ExtensionDetected from './components/ExtensionDetected';
import ExtensionNotDetected from  './components/ExtensionNotDetected';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extensionPing: null
        };
    }

    componentDidMount = () => {
        this.pingExtension() ;
    }

    pingExtension = () => {
        window.WIKA_BRIDGE.ping((result) => {
            this.setState({extensionPing: result}) ;
        }) ;
    }

    renderSwitch() {
        if (this.state.extensionPing==='pong') {
            return <ExtensionDetected />
        } else {
            return <ExtensionNotDetected />
        }
    }

    render() {
        return (<div id="wika-widget-main">
            {this.renderSwitch()}
            </div>)
    }

}

export default App;
