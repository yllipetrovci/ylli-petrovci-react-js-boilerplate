import React from 'react';
import '../styles/sidebar.scss';
import setupRoutes from '../setupRoutes';
import logo from '../assets/logo.png';

const SideBarMenu = (props) => {
    return (
        <div className="sidebar-menu-component">
            <div className="row">
                <div className="col-12">
                    <div className="logo-wrapper">
                        {/* <h3 className="logo">Logo</h3> */}
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <ul className="sidebar-ul">
                        {/* #display routes */}
                        {setupRoutes.map((route, index) => (
                            <li key={index}>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <i className={route.icon}></i>
                                    </li>
                                    <li className="list-inline-item">
                                        {route.name}
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu;