import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav flex-column">
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/containers/NZ">
                        <li>New Zealand</li>
                    </Link>
                    <Link to="/containers/India">
                        <li>India</li>
                    </Link>
                    <Link to="/containers/Technology">
                        <li>Technology</li>
                    </Link>
                    <Link to="/containers/Science">
                        <li>Science</li>
                    </Link>
                    <Link to="/containers/Business">
                        <li>Business</li>
                    </Link>
                    <Link to="/containers/Sports">
                        <li>Sports</li>
                    </Link>
                    <Link to="/containers/Entertainment">
                        <li>Entertainment</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
