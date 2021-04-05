import React from 'react';
import "./Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat";
function Sidebar(){
    return (
        <div className={'sidebar'}>
            <div className={'sidebar_header'}>
                <Avatar src='/static/images/avatar/1.jpg'/>
                <div className={'sidebar_headerRight'}>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className={'sidebar_search'}>
                <div className={'sidebar_searchContainer'}>
                    <SearchIcon/>
                    <input placeholder="Search..." type={'text'}/>
                </div>
            </div>

            <div className={'sidebar_chats'}>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
}

export default Sidebar;