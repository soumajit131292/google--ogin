// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem>
               <NavLink to="/dashboard" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">Dashboard</span>
               </NavLink>
            </SideMenu.MenuSingleItem>


            {/* Add User */}
            <SideMenu.MenuSingleItem>
               <NavLink to="/adduser" activeclassname="active">
                  <i className="menu-icon">
                     <Calendar size={18} />
                  </i>
                  <span className="menu-item-text">Admin</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            {/* Requset Task Builder */}
            <SideMenu.MenuSingleItem>
               <NavLink to="/request" activeclassname="active">
                  <i className="menu-icon">
                     <Calendar size={18} />
                  </i>
                  <span className="menu-item-text">Request</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem>
               <NavLink to="/create-template" activeclassname="active">
                  <i className="menu-icon">
                     <Calendar size={18} />
                  </i>
                  <span className="menu-item-text">Create Template</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         </SideMenu>
      );
   }
}

export default SideMenuContent;
