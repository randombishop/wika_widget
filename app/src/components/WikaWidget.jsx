import React from "react";


class WikaWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: window.location.href,
            urlLikes: 0,
            likesSubmittedAt: null,
            likesSubmittedCount: null,
            likesSubmittedRemaining: null,
        };
    }

    componentDidMount = () => {
        this.subscribeToUrl() ;
        this.subscribeToLike() ;
    }

    subscribeToUrl = () => {
        const self = this;
        const url = this.state.url;
        window.WIKA_BRIDGE.unsub('getUrl', () => {
            window.WIKA_BRIDGE.subscribeToUrl(url, (result) => {
                let urlLikes = Number(result[0]) ;
                self.setState({urlLikes:urlLikes}) ;
            }) ;
        }) ;
    }

    subscribeToLike = () => {
        const self = this;
        const address = this.props.account.address;
        const url = this.state.url;
        window.WIKA_BRIDGE.unsub('getLike', () => {
            window.WIKA_BRIDGE.subscribeToLike(address, url, (result) => {
                self.setState({
                    likesSubmittedAt:Number(result[0]),
                    likesSubmittedCount:Number(result[1]),
                    likesSubmittedRemaining:Number(result[2])
                }) ;
            }) ;
        }) ;
    }


    componentWillUnmount = () => {
        this.unsubscribe() ;
    }

    unsubscribe = () => {
        window.WIKA_BRIDGE.unsub('getUrl', () => {}) ;
        window.WIKA_BRIDGE.unsub('getLike', () => {}) ;
    }

    render() {
        return <div>
            {JSON.stringify(this.props.account)}
            <br/>
            {this.state.url}
            <br/>
            urlLikes: {this.state.urlLikes}
            <br/>
            likesSubmittedAt: {this.state.likesSubmittedAt}
            <br/>
            likesSubmittedCount: {this.state.likesSubmittedCount}
            <br/>
            likesSubmittedRemaining: {this.state.likesSubmittedRemaining}
        </div>
    }

}

export default WikaWidget;
