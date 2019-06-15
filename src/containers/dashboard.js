import React, { Component } from 'react';
import '../styles/dashboard.scss';
import Select from '../components/select';
import Panel from '../components/panel';
import Input from '../components/input';
import Card from '../components/card';
//temporary import here card images
import commentsIcon from '../assets/card-icons/comments.svg';
import notificationIcon from '../assets/card-icons/notification.svg';
import userIcon from '../assets/card-icons/user.svg';
import viewsIcon from '../assets/card-icons/views.svg';
//Recent activity
import RecentActivities from '../components/recent-activites';
import Activity from '../components/activity';
import angelinaJoliImg from '../assets/users/angelina-joli.png';
import bradleyCooperImg from '../assets/users/bradley-cooper.png';
import jeniferAnistonImg from '../assets/users/jenifer-aniston.png';
import hughLaurie from '../assets/users/hugh-laurie.png';

class Dashboard extends Component {
    constructor(props) {
        super(props),
            this.state = {}
    }

    render() {
        return (
            <div className="dashboard-view">
                <div className="row row-modified dashboard-border">
                    <div className="col-9">
                        <div className="container pt-3">
                            <div className="row pb-3">
                                <div className="col-3">
                                    <Card title="Users" value="3214" icon={commentsIcon} color="first-color" />
                                </div>
                                <div className="col-3">
                                    <Card title="Notifications" value="9845" icon={notificationIcon} color="second-color" />
                                </div>
                                <div className="col-3">
                                    <Card title="Comments" value="1249" icon={userIcon} color="third-color" />
                                </div>
                                <div className="col-3">
                                    <Card title="Views" value="321469" icon={viewsIcon} color="fourth-color" />
                                </div>
                            </div>
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
                        <RecentActivities title="RECENT ACTIVITY" >
                            <Activity title={"Angelina Joli"} action={"liked your post"} img={angelinaJoliImg} />
                            <Activity title={'Bradley Cooper'} action={"Commented your profile"} img={bradleyCooperImg} />
                            <Activity title={'Jenifer Aniston'} action={"Started following you"} img={jeniferAnistonImg} />
                            <Activity title={'Hugh Laurie'} action={"Commented your profile"} img={hughLaurie} />
                        </RecentActivities>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;