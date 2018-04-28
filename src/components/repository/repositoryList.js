import React from 'react';
import { List } from 'material-ui/List';
import RepositoryListItem from './repositoryListItem'

export default class RepositoryList extends React.Component {
    renderRepositoryList() {
        if (this.props.githubRepoData == null) {
            return (
                <div>This user didn't made a repository yet.</div>
            )
        }
        else {
            return (
                <div className="repositoryItemContainer">
                    {this.props.githubRepoData.map((item) =>
                        <RepositoryListItem key={item.id} item={item} />
                    )}
                </div>
            )
        }
    }


    render() {
        return (
            <div className='repositoryListContainer'>
                {this.renderRepositoryList()}
            </div>
        )
    }
}
