import { useState } from "react";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

import "./SidebarItem.css";

type SidebarItemDropDown = {
  Icon: any;
  items: any;
  menu: any;
  to?: any;
};

const SidebarItemDropdown = ({ Icon, items, menu }: SidebarItemDropDown) => {
  const [showItem, setShowItem] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;

  const linksArr = items.map((link: any) => link.to);

  // console.log("linksArr", linksArr.includes(currentUrl));

  return (
    <div
      onClick={() => setShowItem(!showItem)}
      className={`${
        linksArr.includes(currentUrl) &&
        "bg-[#025077] text-white mx-4 rounded-md my-5 py-0"
      }`}
    >
      <div className="flex items-center justify-between p-3 cursor-pointer px-7 mt-3">
        <div className="flex items-center">
          {Icon && <Icon size={30} className="mr-2" />}
          <p>{menu}</p>
        </div>
        {showItem && <MdOutlineKeyboardArrowUp size={22} />}
        {showItem === false && <MdKeyboardArrowDown size={22} />}
      </div>

      <div className="flex items-center justify-start p-1 hover:rounded-md">
        {showItem && (
          <div className="flex flex-col px-7">
            {items.length &&
              items.map((item: any) => (
                <NavLink
                  to={item.to}
                  key={item.title}
                  className={`${
                    item.to == currentUrl && "bg-[#014161] text-white"
                  } mb-4 px-3 py-2 w-full hover:bg-[#DCDDE1]`}
                >
                  <span>{item.title}</span>
                </NavLink>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarItemDropdown;