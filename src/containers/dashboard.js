import React, { Component } from 'react';
import '../styles/dashboard.scss';
import RecentActivities from '../components/recent-activites';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-view">
                <h1>Dashboard</h1>
                <RecentActivities/>
            </div>
        )
    }
}

export default Dashboard;