import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './style';
import { FaSignOutAlt, IoHome, IoSettings } from 'react-icons/all';

export default function Header(props) {
  const { user, LogOutComponent } = props;

  return (
    <StyledHeader className="sidebar">
      <img src={user.userImage} alt="" className="sidebar_image" />
      <h3 className="sidebar__name">{user.fullName}</h3>
      <div className="sidebar__links">
        <NavLink to="/" exact className="sidebar__link-item">
          <IoHome className="sidebar__link-icon" />
          Home
        </NavLink>
        <NavLink to="/drinks" exact className="sidebar__link-item">
          <IoHome className="sidebar__link-icon" />
          Drinks
        </NavLink>
        <NavLink to="/food" exact className="sidebar__link-item">
          <IoHome className="sidebar__link-icon" />
          Food
        </NavLink>
        <NavLink to="/salads" exact className="sidebar__link-item">
          <IoHome className="sidebar__link-icon" />
          Salads
        </NavLink>
        <NavLink to="/snaks" exact className="sidebar__link-item">
          <IoHome className="sidebar__link-icon" />
          Snaks
        </NavLink>
      </div>

      <div className="sidebar__links settings">
        <NavLink to="/sign-up" exact className="sidebar__link-item">
          <IoSettings className="sidebar__link-icon" />
          Settings
        </NavLink>
        <div to="/login" exact className="sidebar__link-item">
          <FaSignOutAlt className="sidebar__link-icon" />
          {LogOutComponent}
        </div>
      </div>
    </StyledHeader>
  )
}
