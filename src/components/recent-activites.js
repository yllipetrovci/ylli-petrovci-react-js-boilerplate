import React from 'react';
import '../styles/recent-activities.scss';
import user_img from '../assets/user-avatar.png';

const RecentActivities = (props) => {

    return (
        <div className="recent-activities-component">
            <ul>
                <li>
                    <div className="row">
                        <div className="col-12 pb-4 pt-4">
                            <h4 className="text-left">RECENT ACTIVITY</h4> 
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col-4 text-right pt-2">
                            <img src={user_img} alt="user-avatar" className="rounded-circle" />
                        </div>
                        <div className="col-8 text-left pt-2 pl-0">
                            <h5 className="mb-0">Angelia Joile</h5>
                            <p>Liked your post</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col-5 text-right pt-2">
                            <img src={user_img} alt="user-avatar" className="rounded-circle" />
                        </div>
                        <div className="col-7 text-center pt-3">
                            <h5>Test 2</h5>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col-5 text-right pt-2">
                            <img src={user_img} alt="user-avatar" className="rounded-circle" />
                        </div>
                        <div className="col-7 text-center pt-3">
                            <h5>Test 3</h5>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default RecentActivities;