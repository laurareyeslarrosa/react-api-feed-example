import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyMuiTheme from './../../content/css/app.style';

import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';


import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
  } from 'material-ui/styles/colors';
  
  const style = {margin: 5};


export default class Search extends React.Component {
    render() {
        return(
           // <MuiThemeProvider muiTheme={MyMuiTheme}>
           <MuiThemeProvider>
                <Avatar
                icon={<FileFolder />}
                color={orange200}
                backgroundColor={pink400}
                size={30}
                style={style}
                />
                <div>A new and easy way to find your favorite github users's work</div>
                <TextField
                     hintText="Github username"
                     floatingLabelText="Github username"
                     onChange={this.props.onChangeHandler}
                     value={this.props.username}
                     fullWidth={true}
                />
                <FlatButton
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    label="Find user data"
                    disabled={!this.props.isSearchBtnEnabled}
                    onClick={this.props.onClickHandler}
                    style={style}
                    />
            </MuiThemeProvider>
        )
    }
}