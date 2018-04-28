import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMuiTheme from './../../content/styles/index.style';
import { getGithubRepoData } from './../../helpers/apiCallHandler';
import Header from './../../components/header/header';
import RepositoryList from './../../components/repository/repositoryList';
import Avatar from 'material-ui/Avatar';

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

    renderInfoHeader() {
        return (
            <div>
                <div className="headerInfoContainer">
                    <div className="imgContainer">
                        <Avatar
                            src={this.props.githubData.avatar_url}
                            size={100}
                        />
                    </div>
                    <div className="usernameContainer">{this.props.githubData.name}</div>
                    <div className="usercountryContainer">{this.props.githubData.location}</div>
                    <div className="userstatsContainer">
                        <div className="followersContainer">
                            <div>{this.props.githubData.followers}</div>
                            <div>Followers</div>
                        </div>
                        <div className="followingContainer">
                            <div>{this.props.githubData.following}</div>
                            <div>Following</div>
                        </div>
                    </div>
                </div>
                <div className="descContainer">"{this.props.githubData.bio}"</div>
            </div>
        )
    }

    renderRepositoryData() {
        return <RepositoryList githubRepoData={this.state.githubRepoData} />
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={MyMuiTheme}>
                <div>
                    <Header goBackBtnClickHandler={this.props.goBackBtnClickHandler} />
                    {this.renderInfoHeader()}
                    {this.renderRepositoryData()}
                </div>
            </MuiThemeProvider>
        )

    }

}