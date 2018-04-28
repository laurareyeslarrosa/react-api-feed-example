import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMuiTheme from './../../content/styles/index.style';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

export default class Search extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={MyMuiTheme}>
                <div className="searchPanelTab">
                    <Paper className="searchPanel">
                        <div className="titleContainer">Find <span>me</span> up</div>
                        <div className="subtitleContainer">A new and easy way to find your favorite github users's work</div>
                        <div className="inputContainer">
                            <TextField
                                hintText="Github username"
                                onChange={this.props.onChangeHandler}
                                value={this.props.username}
                                fullWidth={true}
                            />
                        </div>
                        <div className="buttonContainer">
                            <FlatButton
                                label="Find user data"
                                disabled={!this.props.isSearchBtnEnabled}
                                onClick={this.props.onClickHandler}
                                fullWidth={true}
                            />
                        </div>
                    </Paper>
                    <Dialog
                        title="User not found"
                        actions={[
                            <FlatButton
                                label="Close"
                                primary={true}
                                onClick={this.props.dialogNotFoundOnRequestClose}
                            />
                        ]}
                        modal={false}
                        open={this.props.dialogNotFoundOpen}
                        onRequestClose={this.props.dialogNotFoundOnRequestClose}
                    >
                        We couldn't find a github user with this name.
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}