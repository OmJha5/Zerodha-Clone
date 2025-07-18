import React , {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import UserSection from "./UserSection"
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/authSlice';

export default function Menu() {
  let dispatch = useDispatch();
  let defaultStartingMenu = useSelector((state) => state.auth.menu);
  const [selectedMenu , setSelectedMenu] = useState(defaultStartingMenu);
  const [isProfileDropDownOpen , setIsProfileDropDownOpen] = useState(false);

  useEffect(() => {
    dispatch(setMenu(selectedMenu));
  } , selectedMenu)

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus pt-3">
        <ul>
          <li>
            <Link style={{textDecoration : "none"}} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link style={{textDecoration : "none"}} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu == 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link style={{textDecoration : "none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu == 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link style={{textDecoration : "none"}} to="/funds" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu == 3 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>

        </ul>

        <hr />

        <UserSection/>
      </div>
    </div>
  )
}
