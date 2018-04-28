import React from 'react';
import { Card, CardHeader, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';

export default class RepositoryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.clickLinkHandler = this.clickLinkHandler.bind(this);
    }

    clickLinkHandler() {
        window.open(this.props.item.html_url, "_blank");
    }

    render() {
        return (
            <div className="repositoryItem">
                <Card>
                    <CardTitle title={this.props.item.name} subtitle={this.props.item.language} />
                    <CardText className="repositoryItemDescription">
                        {this.props.item.description}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Go to project" onClick={this.clickLinkHandler} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
