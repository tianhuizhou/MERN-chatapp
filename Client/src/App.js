import './App.css';
import React, {useEffect, useState} from 'react';
import MainPage from "./MainPage";
import {Button} from "@material-ui/core"
import Login from "./Login";
import axios from "./axios";

function App() {
    const [user, setUser] = useState("");
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(user)
    const signIn = async (e) => {
        e.preventDefault();
        console.log('go to signIn');
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        await axios.post('/api/vi/authentication/', {
            username: username,
            password: password,
        })
            .then(response => {
                setUser(response);
                console.log(`after sign in, user: ${user.username}`)
            })
    };

  return (
    <div className="app">
        {!user ? (
            <div className={'login'}>
                <div className={'login_container'}>

                    <div className={'login_text'}>
                        <h1>Sign in to WhatsUp-chat</h1>
                    </div>
                    <form>
                        <input value={username} onChange={e => setUsername(e.target.value)} placeholder={"Enter username"} type={'text'}/>
                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder={"Enter password"} type={'text'}/>
                        <Button onClick={signIn}>Sign In</Button>
                    </form>
                </div>
            </div>
        ) : (
            <MainPage username={username}/>
        )}
    </div>
  );
}

export default App;
