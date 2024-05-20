import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import UserProfileIcon from "../assets/icons/UserProfileIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SupportIcon from "../assets/icons/SupportIcon"


const CreatePublication = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <div className="dropdown">
      <button
        className="box-border w-[170px] h-[40px] bg-[#025077] text-[#fff] rounded-[8px] py-[16px] px-3 text-center cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex justify-between ml-[5px] mt-[-5px]">
          <div className="truncate text-sm font-medium ">Create Publication</div>
          <div className="mt-[2px]"
          >
            <MdExpandMore />
          </div>
        </div>
      </button>

      {open ? (
        <ul className="flex flex-col justify-center items-center absolute list-none my-[5px] mx-0 p-2 border-[1px] border-solid w-[170px] bg-[#025077] ">
            <li className=" menu-item">
                <button className="flex justify-center items-center text-white w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium" onClick={() => {
                    handleOpen();
                }} > <span className="pl-[10px]" onClick={() => navigate("/articles")}>Article</span> </button>
            </li>
            <hr className="w-full h-[1px] opacity-20 mb-[5px]"/>
            <li className=" mb-[2px] menu-item">
                <button className="flex text-white w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium truncate">Audio Book</button>
            </li>
            <hr className="w-full h-[1px] opacity-20 mb-[5px]"/>
            <li className="menu-item">
                <button className="flex text-white w-100% h-100% bg-none text-center border-none p-[5px] text-sm font-medium">E-book</button>
            </li>
      </ul>
      ) : null}
      
    </div>
  );
};

export default CreatePublication;
