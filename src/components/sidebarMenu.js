import React from 'react';
import '../styles/sidebar.css';
import setupRoutes from '../setupRoutes';

const SideBarMenu = (props) => {
    return (
        <div className="sidebar-menu-component">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">Logo</h3>
                </div>
                <hr />
                <div className="col-12">
                    <ul>
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