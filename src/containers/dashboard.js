import React, { Component } from 'react';
import '../styles/dashboard.scss';
import RecentActivities from '../components/recent-activites';
import Select from '../components/select';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-view">
                <div className="row row-modified">
                    <div className="col-9">
                        <div className="container pt-3">
                            <div className="row">
                                <div className="col-4">
                                    <h1>Lorem Stats</h1>
                                    <p>September 15 - September 30</p>
                                </div>
                                <div className="offset-4 col-4 pt-3">
                                    <Select/> 
                                </div>
                            </div>
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