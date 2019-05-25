import React from 'react';
import '../styles/header.scss';
import user_img from '../assets/user-avatar.png';

const Header = (props) => {
    return (
        <header className="header-component">
            <div className="row">
                <div className="col-3">
                    <ul className="list-inline pt-4">
                        <li className="list-inline-item">
                            <button type="button">
                                <i class="fas fa-align-justify"></i>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <p>Activity</p>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <button  class="btn btn-success">
                        Create Projects
                    </button>
                </div>
                <div className="offset-5 col-2 text-right pt-3">
                    <img src={user_img} alt="user-avatar" className="avatar-img rounded-circle" />
                </div>
                <div className="pl-0 col-2 pt-3">
                    <p className="username-paragraph">userame</p>
                </div>
            </div>
        </header>
    )
}

export default Header;