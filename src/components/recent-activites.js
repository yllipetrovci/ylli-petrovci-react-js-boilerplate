import React from 'react';
import '../styles/recent-activities.scss';
import angelinaJoliImg from '../assets/users/angelina-joli.png';
import bradleyCooperImg from '../assets/users/bradley-cooper.png';
import jeniferAnistonImg from '../assets/users/jenifer-aniston.png';
import hughLaurie from '../assets/users/hugh-laurie.png';
import Activity from './activity';

const RecentActivities = (props) => {

    return (
        <div className="recent-activities-component">
            <div className="row mr-1">
                <div className="col-12">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-12 pt-5 pb-5">
                                    <h4 className="text-center">RECENT ACTIVITY</h4>
                                </div>
                            </div>
                        </li>
                        <Activity title={"Angelina Joli"} action={"liked your post"} img={angelinaJoliImg} />
                        <Activity title={'Bradley Cooper'} action={"Commented your profile"} img={bradleyCooperImg} />
                        <Activity title={'Jenifer Aniston'} action={"Started following you"} img={jeniferAnistonImg} />
                        <Activity title={'Hugh Laurie'} action={"Commented your profile"} img={hughLaurie} />
                        <li className="text-center">
                            <button type="button view-more">VIEW MORE</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentActivities;