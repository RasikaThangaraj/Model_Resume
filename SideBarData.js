import React from "react";
import * as MdIcons  from "react-icons/md"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as GrIcons from "react-icons/gr"
import * as GiIcons from "react-icons/gi"



export const SideBarData = [
    {
        title : "Work-Experience",
        path  : "/workExp",
        icon  : <MdIcons.MdWork/>,
        cname :  "nav-text"
},
{
    title : "Educational-Qualification",
    path  : "/eduqual",
    icon  : <FaIcons.FaUserGraduate/>,
    cname :  "nav-text"
},
{
    title : "Achievements",
    path  : "/achieve",
    icon  : <GrIcons.GrAchievement/>,
    cname :  "nav-text"
},
{
    title : "Skills",
    path  : "/skills",
    icon  : <GiIcons.GiSkills/>,
    cname :  "nav-text"
},
]