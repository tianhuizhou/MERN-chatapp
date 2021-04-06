import React, {useState} from 'react';
import "./Chat.css"
import Avatar from "@material-ui/core/Avatar";
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import IconButton from "@material-ui/core/IconButton";
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import axios from './axios';

function Chat({messages}){
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/api/v1/messages/new', {
            message: input,
            name: "bob",
            timestamp: "now !",
            received: false,
        });

        setInput("");
    }
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
                {messages.map(message => (
                    <p className={`chat_message ${message.received && "chat_reciever"}`}>
                        <span className={'chat_name'}>{message.name}</span>
                        {message.message}
                        <span className={'chat_timestamp'}>
                            {message.timestamp}
                    </span>
                    </p>
                ))}
            </div>
            <div className={'chat_footer'}>
                <MicNoneOutlinedIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder={"Type a message"} type={'text'}/>
                    <button onClick={sendMessage} type={"submit"}>Send</button>
                </form>
                <EmojiEmotionsOutlinedIcon/>
                <AddCircleOutlineOutlinedIcon/>
            </div>
        </div>
    )
}

export default Chat;