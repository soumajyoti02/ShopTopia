import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../Images/profile.gif'
import trolley from '../Images/trolley.gif'
import truck from '../Images/truck.gif'


export const Navbar = () => {
    return (
        <>
            <header>
                <div className="navbar">

                    <div className="nav-logo border">
                        <div className="logo">
                            <img className='logo-img' src={logo} alt="cart" />
                            <p className='web-name'>Shop-Topia</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Products" className="search-input" />
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </div>
                    </div>

                    <div className="nav-signin border">
                        {/* <p><span>Hello, Sign in</span></p> */}
                        <img className='profile-icon' src={profile} alt="Profile Icon" />
                        <p className='navcmn'>Profile</p>
                    </div>

                    <div className="nav-return border">
                        <img className='truck-img' src={truck} alt="cart" />
                        <p className="nav-second navcmn">Returns & Orders</p>
                    </div>

                    <div className="nav-cart border">
                        <img src={trolley} alt="cart" />
                        <p className='navcmn'>Cart</p>
                    </div>
                </div >
                <div className="panel">
                    {/* <div className="panel-all">
                        <p>All</p>

                    </div> */}
                    <div className="panel-ops">
                        <p>Today's Deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift Cards</p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals">
                        <p>Shop deal in Electronics</p>
                    </div>
                </div>
            </header>
        </>
    )
}
