import React from 'react';
import '../styles/header.scss';
import user_img from '../assets/users/hugh-laurie.png';

const Header = (props) => {
    return (
        <header className="header-component">
            <div className="row">
                <div className="col-3">
                    <ul className="list-inline pt-3">
                        <li className="list-inline-item">
                            <button type="button" className="transparent">
                                <i className="fas fa-align-justify"></i>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <p>Activity</p>
                        </li>
                    </ul>
                </div>
                <div className="offset-1 col-5 pt-3 text-right">
                    <ul className="list-inline pt-1">
                        <li className="list-inline-item">
                            <button className="btn btn-success">
                                Create Projects
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="transparent">
                                <i className="far fa-bell"></i>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="transparent">
                                <i className="far fa-comment-alt"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-1 text-right pt-3">
                    <img src={user_img} alt="user-avatar" className="avatar-img rounded-circle" />
                </div>
                <div className="pl-0 col-2 pt-2">
                    <p className="username-paragraph">Hugh Laurie</p>
                </div>
            </div>
        </header>
    )
}

export default Header;