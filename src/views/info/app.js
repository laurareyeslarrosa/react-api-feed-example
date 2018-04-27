import React from 'react';
import { getGithubRepoData } from './../../helpers/apiCallHandler';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubRepoData: null
        };
    }

    componentDidMount() {
        getGithubRepoData(this, "githubRepoData", this.props.githubData.login);
    }

    render() {
        return (
            <div>MAIN - {this.props.githubData.name}</div>
        )

    }

}