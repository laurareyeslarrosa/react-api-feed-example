import React from 'react';
import { getGithubData } from './../../helpers/apiCallHandler';
import Search from './../search/app';
import Info from './../info/app';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubData: [],
            username: "",
            requestFailed: false
        };
    }
    /*
        componentDidMount() {
            getGithubData(this, "githubData", "laurareyeslarrosa");
        }
    */
/*
    componentDidMount() {
        getGithubData(this, "githubData", "asdasdasdadaads");
    }
*/
    renderFailedRequest() {
        return (
            <div>No user found</div>
        )
    }

    renderSuccessRequest() {
        return (
            <div>MAIN - {this.state.githubData.name}</div>
        )
    }

    btnSearchClickHandler() {
        console.log(this.state.username);
        getGithubData(this, "githubData", this.state.username);
    }

    render() {
        console.log(this.state.githubData)
        if (this.state.githubData === []) {
            if (this.state.requestFailed)
                return this.renderFailedRequest()
            else
                return this.renderSuccessRequest()
        } else
            return <Search onClickHandler={this.btnSearchClickHandler} username={this.state.username}/>;
    }
}