import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <div>MAIN - {this.props.githubData.name}</div>
        )

    }

}