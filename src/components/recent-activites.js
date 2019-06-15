import React from 'react';
import '../styles/recent-activities.scss';

const RecentActivities = (props) => {

    return (
        <div className="recent-activities-component">
            <div className="row mr-1">
                <div className="col-12">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-12 pt-5 pb-5">
                                    <h4 className="text-center">{props.title}</h4>
                                </div>
                            </div>
                        </li>
                        {props.children}
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