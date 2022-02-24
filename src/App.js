import React from'react';
import './App.css';
import ChatRoom from './Components/ChatRoom'
import SignIn from './Components/SignIn'
import Header from './Components/Header'

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, query, orderBy, limit, serverTimestamp, addDoc } from 'firebase/firestore'
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
//hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB9D0Q2Lmkby3D9CRPUdvpH5a_6iXzwShQ",
  authDomain: "chat-app-d7092.firebaseapp.com",
  projectId: "chat-app-d7092",
  storageBucket: "chat-app-d7092.appspot.com",
  messagingSenderId: "404180275065",
  appId: "1:404180275065:web:23406e9d1077b7594d69a8",
  measurementId: "G-4JYNYLM1TM"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Header />
      <section>
        { user ? <ChatRoom /> : <SignIn className='sign-in' /> }
      </section>
    </div>
  );
}

export default App;