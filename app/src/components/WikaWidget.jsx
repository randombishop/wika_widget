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

    render() {
        return <div>
            {JSON.stringify(this.props.account)}
            <br/>
            {this.state.url}
        </div>
    }

}

export default WikaWidget;
