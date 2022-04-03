import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    
        apiKey: "AIzaSyCqstuBFNRYqb3Uu2B20BkZSjS_QFF2A4Q", 
        authDomain: "chitchat-5c6a7.firebaseapp.com",
        projectId: "chitchat-5c6a7",
        storageBucket: "chitchat-5c6a7.appspot.com",
        messagingSenderId: "34511684463",
        appId: "1:34511684463:web:9f26389b8e329466cc9e9a"
     
}).auth();