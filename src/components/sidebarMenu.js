import React from 'react';
import '../styles/sidebar.css';
import setupRoutes from '../setupRoutes';

const SideBarMenu = (props) => {
    return (
        <div className="sidebar-menu-component">
            <div className="row">
                <div className="col-12">
                    <div className="logo-wrapper">
                        <h3 className="logo">Logo</h3>
                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <ul className="sidebar-ul">
                        {/* #display routes */}
                        {setupRoutes.map((route, index) => (
                            <li>{route.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu;