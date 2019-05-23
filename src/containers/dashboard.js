import React, { Component } from 'react';
import '../styles/dashboard.scss';
import RecentActivities from '../components/recent-activites';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-view">
                <h1>Dashboard</h1>
                <div className="row ">
                    <div className="offset-9 col-3 text-right">
                        <RecentActivities />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;