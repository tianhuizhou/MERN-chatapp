import React from 'react';
import "./Chat.css"
import Avatar from "@material-ui/core/Avatar";
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import IconButton from "@material-ui/core/IconButton";
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
function Chat(){
    return (
        <div className={'chat'}>
            <div className={'chat_header'}>
                <Avatar />
                <div className={'chat_headerInfo'}>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className={'chat_headerRight'}>
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
            </div>
            <div className={'chat_body'}>
                <p className={'chat_message'}>
                    <span className={'chat_name'}>Bobby</span>
                    This is some message ....
                    <span className={'chat_timestamp'}>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className={'chat_message chat_reciever'}>
                    <span className={'chat_name'}>Bobby</span>
                    This is some message ....
                    <span className={'chat_timestamp'}>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className={'chat_message'}>
                    <span className={'chat_name'}>Bobby</span>
                    This is some message ....
                    <span className={'chat_timestamp'}>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className={'chat_footer'}>
                <MicNoneOutlinedIcon/>
                <form>
                    <input placeholder={"Type a message"} type={'text'}/>
                    <button type={"submit"}>Send a message</button>
                </form>
                <EmojiEmotionsOutlinedIcon/>
            </div>
        </div>
    )
}

export default Chat;