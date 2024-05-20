import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import UserProfileIcon from "../assets/icons/UserProfileIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SupportIcon from "../assets/icons/SupportIcon"


const DropdownAction = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <div className="dropdown">
      <button
        className="box-border w-[90px] h-[36px] bg-transparent text-[#919191] rounded-[1px] text-center cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex justify-between ml-[5px] ">
          <div>Admin</div>
          <div className="mt-[2px]"
          >
            <MdExpandMore />
          </div>
        </div>
      </button>

      {open ? (
        <ul className="absolute list-none my-[5px] mx-0 p-2 border-[1px] border-solid w-[100px] bg-white ">
            <li className=" menu-item">
                <button className="flex text-[#025077] w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium" onClick={() => {
                    handleOpen();
                }} > <UserProfileIcon /> <span className="pl-[10px]" onClick={() => navigate("/user-profile")}>Profile</span> </button>
            </li>
            <li className="menu-item">
                <button className="flex text-[#025077] w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium"> <SettingsIcon /> <span className="pl-[10px]">Setting</span> </button>
            </li>
            <li className="menu-item">
                <button className="flex text-[#025077] w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium" onClick={() => navigate("/support")}> <SupportIcon/> <span className="pl-[10px]">Support</span> </button>
            </li>
            <li className="menu-item">
                <button className="flex text-[#025077] w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium" onClick={() => navigate("/signin")}> <LogoutIcon /> <span className="pl-[10px]">Logout</span></button>
            </li>
      </ul>
      ) : null}
      
    </div>
  );
};

export default DropdownAction;
