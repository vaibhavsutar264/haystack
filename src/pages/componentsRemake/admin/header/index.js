import Link from 'next/link';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { GetUserLogin } from '../../services';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-light bg-clr">
                    <Link className="navbar-brand logo-brand" href="/">ADMIN PANEL</Link>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" ><i className="fas fa-bars" /></button>
                    <Link href="/" className="frnt-link"><i className="fas fa-external-link-alt" />Home</Link>
                    <ul className="navbar-nav ml-auto mr-md-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <Link className="dropdown-item admin-dropdown-item" href="edit_profile.html">Edit Profile</Link>
                                <Link className="dropdown-item admin-dropdown-item" href="change_password.html">Change Password</Link>
                                {/* <span className="dropdown-item admin-dropdown-item" onClick={() => GetUserLogin.logout()}>Logout</span> */}
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
};
