import React from 'react';
import '../styles/recent-activities.scss';
import user_img from '../assets/user-avatar.png';

const RecentActivities = (props) => {

    return (
        <div className="recent-activities-component">
            <div className="row">
                <div className="col-12">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-12 pt-5 pb-5">
                                    <h4 className="text-center">RECENT ACTIVITY</h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={user_img} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Angelia Joile</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Liked your post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={user_img} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Angelia Joile</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Liked your post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={user_img} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Angelia Joile</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Liked your post</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentActivities;