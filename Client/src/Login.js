import React from 'react';
import {Button} from "@material-ui/core"
import "./Login.css";
import axios from './axios';

function Login(){
    const signIn = () => {
        axios.get('/api/vi/authentication/')
            .then()
    };
    return (
        <div className={'login'}>
            <div className={'login_container'}>
                {/*<img src={"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}*/}
                {/*    alt={''}*/}
                {/*/>*/}
                <div className={'login_text'}>
                    <h1>Sign in to WhatsUp-chat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login;