import React from 'react';

export default class Search extends React.Component {
    render() {
        return(
            <div>
                <div>Search a gitbuh user</div>
                <input onChange={this.props.onChangeHandler} type="text" value={this.props.username} />
                <button disabled={!this.props.isSearchBtnEnabled} onClick={this.props.onClickHandler}>Search</button>
            </div>
        )
    }
}