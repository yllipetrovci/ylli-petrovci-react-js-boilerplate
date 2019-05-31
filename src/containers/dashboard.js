import React, { Component } from 'react';
import '../styles/dashboard.scss';
import RecentActivities from '../components/recent-activites';
import Select from '../components/select';
import Panel from '../components/panel';
import Input from '../components/input';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-view">
                <div className="row row-modified dashboard-border">
                    <div className="col-9">
                        <div className="container pt-3">
                            <Panel title="Lorem Stats" paragraph="September 15 - September 30">
                                <div className=" col-4">
                                    <Select />
                                </div>
                                <div className="col-4">
                                    <Input />
                                </div>
                            </Panel>
                        </div>
                    </div>
                    <div className="col-3 pr-0 text-right">
                        <RecentActivities />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;