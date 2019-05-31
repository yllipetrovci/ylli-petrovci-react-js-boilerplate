import React, { Component } from 'react';
import '../styles/components/panel.scss';

export default class Panel extends Component {

    render() {
        return (
            <div className="panel-view shadow">
                <div className="row">
                    <div className="col-12 text-left">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.paragraph}</p>
                    </div>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}