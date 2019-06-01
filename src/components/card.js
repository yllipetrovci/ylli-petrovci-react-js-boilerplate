import React from 'react';
import '../styles/components/card.scss';

const Card = (props) => {

    return (
        <div className="card-component rounded">
            <div className="row text-center">
                <div className="col-12 pb-2 pt-2">
                    <img src={props.icon} />
                </div>
                <div className="col-12">
                    <p className="third-color">{props.title}</p>
                </div>
                <div className="col-12 pb-1">
                    <h4 className={props.color ? props.color : 'first-color'}>{props.value}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;