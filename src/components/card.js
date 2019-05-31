import React from 'react';
import '../styles/components/card.scss';

const Card = (props) => {
    return (
        <div className="card-component">
            <div className="row">
                <div className="col-12">
                    <img src={props.icon} />
                </div>
                <div className="col-12">
                    {props.title}
                </div>
                <div className="col-12">
                    {props.value}
                </div>
            </div>
        </div>
    )
}

export default Card;