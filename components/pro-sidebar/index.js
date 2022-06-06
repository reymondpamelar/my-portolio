import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, {useEffect} from "react";
import * as Icon from 'react-feather'
import 'react-pro-sidebar/dist/css/styles.css';
import ReactTooltip from 'react-tooltip';

const Sidebar = () => {
    return(
        <ProSidebar width={150} className={'sidebar'} collapsed={true}>
            <ReactTooltip place={'right'} effect={'solid'} className={'shadow-lg bg-zinc-500'}/>
            <Menu iconShape="circle" >
                <MenuItem icon={<Icon.Home/>} data-tip="Home">Dashboard</MenuItem>
                <MenuItem icon={<Icon.Package/>} data-tip="Projects">Projects</MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar