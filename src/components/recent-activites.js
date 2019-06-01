import React from 'react';
import '../styles/recent-activities.scss';
import user_img from '../assets/user-avatar.png';
import angelinaJoliImg from '../assets/users/angelina-joli.png';
import bradleyCooperImg from '../assets/users/bradley-cooper.png';
import hughLaurieImg from '../assets/users/hugh-laurie.png';
import jeniferAnistonImg from '../assets/users/jenifer-aniston.png';

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
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={angelinaJoliImg} alt="user-avatar" className="rounded-circle" />
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
                                    <img src={bradleyCooperImg} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Bradley Cooper</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Commented your profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={jeniferAnistonImg} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Jenifer Aniston</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Started following you</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4 text-right pt-2">
                                    <img src={jeniferAnistonImg} alt="user-avatar" className="rounded-circle" />
                                </div>
                                <div className="col-8 text-left pt-2 pl-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-0">Hugh Laurie</h5>
                                        </div>
                                        <div className="col-12">
                                            <p>Commented your profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
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