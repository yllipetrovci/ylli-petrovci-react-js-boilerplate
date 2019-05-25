import React from 'react';
import '../styles/header.scss';
import user_img from '../assets/user-avatar.png';

const Header = (props) => {
    return (
        <header className="header-component">
            <div className="row">
                <div className="col-1">
                    <button type="button">
                        <div className="menu-icon">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </button>
                </div>
                <div className="col-2">
                    <h3>Activity</h3>
                </div>
                <div className="offset-5 col-2 text-right">
                    <img src={user_img} alt="user-avatar" className="avatar-img rounded-circle" />
                </div>
                <div className="pl-0 col-2">
                    <p className="username-paragraph">userame</p>
                </div>
            </div>
        </header>
    )
}

export default Header;