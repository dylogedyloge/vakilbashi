import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { openRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import { useLocalStorage } from "usehooks-ts";

import { NavLink, Routes, Link, useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state) => state.header);

  const [theme, setTheme] = useLocalStorage("theme", "dracula");
  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "fantasy" : "dracula");
  };
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "پیام ها",
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      })
    );
  };

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-secondary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5 " />
          </label>
          <h1 className="text-2xl font-semibold mr-2">{pageTitle}</h1>
        </div>

        <div className="order-last">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />

            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Notification icon */}
          <button
            className="btn btn-ghost  btn-circle"
            onClick={() => openNotification()}
          >
            <div className="indicator">
              <BellIcon className="h-6 w-6" />
              {noOfNotifications > 0 ? (
                <span className="indicator-item badge badge-secondary badge-sm">
                  {noOfNotifications}
                </span>
              ) : null}
            </div>
          </button>

          {/* Profile icon, opening menu on click */}
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/1.jpg" alt="profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content dropdown-right mt-16  p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="justify-between">
                <Link to={"/app/settings-profile"}>
                  <UsersIcon className="w-4" />
                  حساب کاربری
                  {/* <span className="badge">جدید</span> */}
                </Link>
              </li>
              <li className="">
                <Link to={"/app/settings-billing"}>
                  <WalletIcon className="w-4" />
                  صورتحساب
                </Link>
              </li>
              <div className="divider mt-0 mb-0"></div>
              <li>
                <a
                  onClick={logoutUser}
                  href="/login"
                  className="text-secondary font-bold"
                >
                  خروج
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
