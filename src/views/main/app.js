import React from 'react';
import { getGithubData } from './../../helpers/apiCallHandler';
import Search from './../search/app';
import Info from './../info/app';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubData: null,
            username: "",
            requestFailed: false,
            isSearchBtnEnabled: false
        };

        this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
        this.handleBtnSearchOnClick = this.handleBtnSearchOnClick.bind(this);
    }

    renderSearchForm() {
        return (
            <Search
                isSearchBtnEnabled={this.state.isSearchBtnEnabled}
                onChangeHandler={this.handleInputSearchOnChange}
                onClickHandler={this.handleBtnSearchOnClick}
                username={this.state.username} />
        )
    }

    renderSuccessRequest() {
        return (
            <Info githubData={this.state.githubData}/>
        )
    }

    handleBtnSearchOnClick() {
        getGithubData(this, "githubData", this.state.username);
    }

    handleInputSearchOnChange(event) {
        this.setState({ username: event.target.value });
        this.setState({ isSearchBtnEnabled: (!event.target.value == "") });
    }

    componentDidUpdate() {
        if (this.state.requestFailed) {
            alert("user not found");
            this.setState({requestFailed: false});
        } 
    }

    render() {
        if (this.state.githubData)
            return this.renderSuccessRequest()
        else
            return this.renderSearchForm()
    }
}