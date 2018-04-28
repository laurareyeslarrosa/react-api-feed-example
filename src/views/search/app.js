import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMuiTheme from './../../content/styles/index.style';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Title from './../../components/title/title';

export default class Search extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={MyMuiTheme}>
                <div className="searchPanelTab">
                    <Paper className="searchPanel">
                        <Title/>
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