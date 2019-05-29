import React, { Component } from 'react';
import '../styles/dashboard.scss';
import RecentActivities from '../components/recent-activites';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-view">
                <div className="row row-modified">
                    <div className="col-9">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="col-3 text-right">
                        <RecentActivities />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;