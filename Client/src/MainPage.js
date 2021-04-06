import './MainPage.css';
import React, {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from './axios';
function MainPage({username}) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/messages/sync')
            .then(response => {
                setMessages(response.data);
            })
    },[])

    useEffect(() => {
        var pusher = new Pusher('59a796aef0b77322e157', {
            cluster: 'us3'
        });

        var channel = pusher.subscribe('messages');
        channel.bind('inserted', function(data) {
            // alert(JSON.stringify(data));
            setMessages([...messages, data]);
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    },[messages]);


    console.log(messages);

    return (
        <div className="app">
            <div className={'app_body'}>
                <Sidebar />
                <Chat messages={messages} username={username}/>
            </div>
        </div>
    );
}

export default MainPage;
