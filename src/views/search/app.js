import React from 'react';

export default class Search extends React.Component {
    render() {
        return(
            <div>
                <div>Search a gitbuh user</div>
                <input type="text" value={this.props.username}/>
                <button onClick={this.props.onClickHandler}>Search</button>
            </div>
        )
    }
}