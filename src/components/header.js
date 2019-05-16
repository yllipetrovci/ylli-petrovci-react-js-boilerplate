import React from 'react';
import '../styles/header.css';
import user_img from '../assets/user-avatar.png';

const Header = (props) => {
    return (
        <header className="header-component">
            <div className="row">
                <div className="col-5">
                    <button type="button" className="btn btn-success">Collapse</button>
                </div>
                <div className="offset-3 col-2 text-right">
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