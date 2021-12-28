import React from 'react';

import * as AiIcons from "react-icons/ai";
import * as fcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as cgIcons from "react-icons/cg";

const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'My Results',
        path:'/results',
        icon:<BsIcons.BsGraphUp/>,
        cName:'nav-text'
    },{
        title:'Submissions',
        path:'/submission',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },{
        title:'Fee Submission',
        path:'/fee',
        icon:<fcIcons.FcMoneyTransfer/>,
        cName:'nav-text'
    },{
        title:'Profile',
        path:'/profile',
        icon:<cgIcons.CgProfile/>,
        cName:'nav-text'
    },{
        title:'Settings',
        path:'/setting',
        icon:<AiIcons.AiFillSetting/>,
        cName:'nav-text'
    }

]

export default SidebarData