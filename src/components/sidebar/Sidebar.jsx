import React from 'react'
import "./Sidebar.css"
import{MdLineStyle,MdTimeline,MdAttachMoney,MdOutlineManageAccounts,MdReport,MdOutlineMailOutline,MdOutlineFeedback,MdForwardToInbox,MdTrendingUp,MdProductionQuantityLimits} from "react-icons/md"
import{RiUserHeartLine,RiBarChartBoxLine}from "react-icons/ri"
import { Link } from 'react-router-dom'
 
const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/">
                        <li className="sidebarListItem active">
                         <MdLineStyle className='sidebarIcon'/> Home  
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                         <MdTimeline className='sidebarIcon'/>  Analytics 
                        </li>
                        <li className="sidebarListItem">
                         <MdTrendingUp className='sidebarIcon'/> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='Link'>
                        <li className="sidebarListItem ">
                         <RiUserHeartLine className='sidebarIcon'/> Users  
                        </li>  
                        </Link>
                        <Link to="/products" className='Link'>
                        <li className="sidebarListItem">
                         <MdProductionQuantityLimits className='sidebarIcon'/>  Products 
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                         <MdAttachMoney className='sidebarIcon'/> Transactions
                        </li>
                        <li className="sidebarListItem">
                         <RiBarChartBoxLine className='sidebarIcon'/> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                         <MdOutlineMailOutline className='sidebarIcon'/> Mail
                        </li>
                        <li className="sidebarListItem">
                         <MdOutlineFeedback className='sidebarIcon'/>  Feedback 
                        </li>
                        <li className="sidebarListItem">
                         <MdForwardToInbox className='sidebarIcon'/> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                         <MdOutlineManageAccounts className='sidebarIcon'/> Manage
                        </li>
                        <li className="sidebarListItem">
                         <MdTimeline className='sidebarIcon'/>  Analytics 
                        </li>
                        <li className="sidebarListItem">
                         <MdReport className='sidebarIcon'/>  Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
    
  )
}

export default Sidebar