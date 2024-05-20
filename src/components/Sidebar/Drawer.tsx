// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   Box,
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// interface ICON {
//   name: string;
//   icon: any;
//   Drop?: any;
// }

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SaveAsSharpIcon from "@mui/icons-material/SaveAsSharp";
import BookIcon from "@mui/icons-material/Book";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import SidebarItem from "./SidebarItem";
import SidebarItemDropdown from "./SidebarItemDropdown";

const Drawer = () => {
  // fixed top-0 bottom-0 overflow-y-scroll
  return (
    <aside className="md:w-[25%] border-r min-h-full bg-white">
      <div className="py-2">
        <SidebarItem
          Icon={DashboardOutlinedIcon}
          text="Dashboard"
          to="/dashboard"
        />

        <SidebarItemDropdown
          Icon={LibraryBooksIcon}
          menu="Publications"
          items={[
            { title: "Articles", to: "/articles" },
            { title: "Audio Books", to: "/audio-books" },
            { title: "Books", to: "/books" },
          ]}
        />

        <SidebarItem Icon={BookIcon} text="Drafts" to="/drafts" />

        <div className="border border-[#CDCDCD] mx-2" />

        <SidebarItemDropdown
          Icon={AnalyticsIcon}
          menu="Analytics"
          items={[
            { title: "Publication", to: "/analytics-publication" },
            { title: "Revenue", to: "/revenue" },
            { title: "Readers & Subscribers", to: "/readers-subscribers" },
            { title: "Community", to: "/analytics-community" },
          ]}
        />

        <SidebarItemDropdown
          Icon={Diversity3Icon}
          menu="Community"
          items={[
            { title: "Communities", to: "/communities" },
            { title: "Discussions", to: "/Discussions" },
          ]}
        />

        <SidebarItem Icon={SaveAsSharpIcon} text="Resources" to="/resources" />
      </div>
    </aside>
  );
};

export default Drawer;
