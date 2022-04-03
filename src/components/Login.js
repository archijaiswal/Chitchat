import React from 'react';
import "firebase/app";
import firebase from "firebase/app";
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import {auth} from '../firebase';
const Login=() => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Chitchat!</h2>
                <div className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br />
                <br />
                <div className="login-button facebook"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with facebook
                </div>

            </div>
            <div className="footer">Developed By Archi</div>
        </div>
    );
}
export default Login;