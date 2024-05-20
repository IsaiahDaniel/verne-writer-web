import { NavLink, useLocation } from "react-router-dom";

import "./SidebarItem.css";

type SideBarItem = {
  iconStyles?: any;
  Icon?: any;
  text?: string;
  to?: any;
};

const SidebarItem = ({ iconStyles, Icon, text, to }: SideBarItem) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="mx-2 mt-4">
      <NavLink
        to={to}
        className={`flex items-center px-5 w-full rounded-md py-3 sidebarNav ${
          to == currentUrl && "bg-[#025077] text-white"
        }`}
      >
        {Icon && <Icon size="25" className="mr-2" {...iconStyles} />}
        <span>{text}</span>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
