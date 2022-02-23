import React from'react';
import './App.css';
import ChatRoom from './Components/ChatRoom'
import SignIn from './Components/SignIn'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyB9D0Q2Lmkby3D9CRPUdvpH5a_6iXzwShQ",
  authDomain: "chat-app-d7092.firebaseapp.com",
  projectId: "chat-app-d7092",
  storageBucket: "chat-app-d7092.appspot.com",
  messagingSenderId: "404180275065",
  appId: "1:404180275065:web:23406e9d1077b7594d69a8",
  measurementId: "G-4JYNYLM1TM"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
