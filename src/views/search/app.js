import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyMuiTheme from './../../content/css/app.style';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

export default class Search extends React.Component {
    render() {
        return (
            // <MuiThemeProvider muiTheme={MyMuiTheme}>
            <MuiThemeProvider>
                <div className="searchPanelContainer">
                    <div><IconButton><i className="material-icons">dns</i></IconButton></div>
                    <div>A new and easy way to find your favorite github users's work</div>
                    <TextField
                        hintText="Github username"
                        floatingLabelText="Github username"
                        onChange={this.props.onChangeHandler}
                        value={this.props.username}
                        fullWidth={true}
                    />
                    <FlatButton
                        label="Find user data"
                        disabled={!this.props.isSearchBtnEnabled}
                        onClick={this.props.onClickHandler}
                        fullWidth={true}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}