// import {
//   AppBar,
//   Box,
//   Menu,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   Tooltip,
//   Avatar,
// } from "@mui/material";
// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchSharpIcon from "@mui/icons-material/SearchSharp";
// import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

// import AccountMenu from "./DropDown";

import Logo from "../../assets/images/Verne20.png";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Button from "../../common/Button";
import DropdownActions from "../DropdownAction";
import NotificationsIcon from "../../assets/icons/Notifications";
import MessageIcon from "../../assets/icons/Messages";
import UserIcon from "../../assets/icons/UserIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-6 shadow-md border-b border-b-[#AEAEAE] px-5">
      <div className="flex items-center justify-between">
        <img src={Logo} className="w-20" />

        <div className="flex items-center py-2 bg-[#F8F8F8] border border-[#CDCDCD] px-3 rounded-md w-[20%] h-[40px] mr-[-100px]">
          <input
            type="text"
            className="w-full outline-none bg-transparent placeholder:text-sm placeholder:text-[#AEAEAE] "
            placeholder="Search"
          />
          <MdSearch className="mr-2 opacity-50 w-[25px] h-[25px] cursor-pointer" />
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Button
              withIcon
              Icon={NotificationsIcon}
              classNames="w-[16px] h-[20px] mr-[5px]"
              onClick={() => navigate("/notifications")}
            />
            <Button
              withIcon
              Icon={MessageIcon}
              classNames="w-[32px] h-[26px] mr-[20px]"
              onClick={() => navigate("/messages")}
            />
          </div>
          <div className="flex cursor-pointer mr-[10px]">
            <Button withIcon Icon={UserIcon} classNames="w-[28px] h-[28px] " />
            <div className="mt-[-5px]">
              <DropdownActions />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
