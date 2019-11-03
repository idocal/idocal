import React, { Component } from 'react';
import FlexView from "react-flexview/lib/FlexView";
import '../style/Project.css';
import { withRouter } from 'react-router-dom'

class Project extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.history.push('/work/' + this.props.alias);
    }

    render() {
        return (
            <FlexView column
                      className={ "project " + this.props.color }
                      onClick={this.onClick}
                      vAlignContent="center"
                      hAlignContent="center">
                <h3>{this.props.name}</h3>
                <h4>{this.props.tags}</h4>
            </FlexView>
        )
    }

}

export default withRouter(Project);