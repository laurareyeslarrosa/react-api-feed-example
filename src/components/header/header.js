import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Title from './../title/title';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    className='headerContainer'
                    title={<Title/>}
                    iconElementLeft={<IconButton onClick={this.props.goBackBtnClickHandler}><i className="material-icons">arrow_back</i></IconButton>}
                />
            </div>
        )
    }
}