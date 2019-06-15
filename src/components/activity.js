import React from 'react';

const Activity = (props) => (
    <li>
        <div className="row">
            <div className="col-4 text-right pt-2">
                <img src={props.img} alt={props.title} className="rounded-circle" />
            </div>
            <div className="col-8 text-left pt-2 pl-0">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">{props.title}</h5>
                    </div>
                    <div className="col-12">
                        <p>{props.action}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
)

export default Activity;