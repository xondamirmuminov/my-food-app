import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from '../../style/StyleSidebar';
import { ReactComponent as ProfileImage } from '../../assets/profile.svg';
import { FaSignOutAlt, ImHome, IoSettings, BiDrink, FaHamburger, GiChipsBag } from 'react-icons/all'

export default function Header() {
    return (
        <StyledHeader className="sidebar">
            <ProfileImage className="sidebar__image" fill="red" width="30px" height="30px" />
            <h3 className="sidebar__name">User name</h3>
            <div className="sidebar__links">
                <NavLink to="/" exact className="sidebar__link-item">
                    <ImHome className="sidebar__link-icon" />
                    Home
                </NavLink>
                <NavLink to="/drinks" exact className="sidebar__link-item">
                    <BiDrink className="sidebar__link-icon" />
                    Drinks
                </NavLink>
                <NavLink to="/food" exact className="sidebar__link-item">
                    <FaHamburger className="sidebar__link-icon" />
                    Food
                </NavLink>
                <NavLink to="/salads" exact className="sidebar__link-item">
                    <ImHome className="sidebar__link-icon" />
                    Salads
                </NavLink>
                <NavLink to="/shakes" exact className="sidebar__link-item">
                    <ImHome className="sidebar__link-icon" />
                    Shakes
                </NavLink>
                <NavLink to="/snaks" exact className="sidebar__link-item">
                    <GiChipsBag className="sidebar__link-icon" />
                    Snaks
                </NavLink>
            </div>

            <div className="sidebar__links settings">
                <NavLink to="/settings" exact className="sidebar__link-item">
                    <IoSettings className="sidebar__link-icon" />
                    Settings
                </NavLink>
                <NavLink to="/login" exact className="sidebar__link-item">
                    <FaSignOutAlt className="sidebar__link-icon" />
                    Sign Out
                </NavLink>
            </div>
        </StyledHeader>
    )
}
