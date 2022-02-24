import React from "react"
import { nanoid } from "nanoid"
import { collection, query, orderBy, limit, serverTimestamp, addDoc } from 'firebase/firestore'

import { useCollectionData } from 'react-firebase-hooks/firestore'


function ChatRoom(props){
    const {auth, db} = props

    function Messages(){
        const autoScroll = React.useRef()

        const messageRef = collection(db, 'messages')
        const q = query(messageRef, orderBy('createdAt'), limit(25))
      
        const [messages] = useCollectionData(q, {idField: 'id'})
        const [formValue, setFormValue] = React.useState('')
      
        const sendMessage = async (e) => {
          e.preventDefault()
          const {uid, photoURL} = auth.currentUser
          const docRef = await addDoc(messageRef,{
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
          })
      
          setFormValue('')
          autoScroll.current.scrollIntoView({behavior: 'smooth'})
        }
        return(
          <div>
            <main className='container--messages'>

              {messages && messages.map(msg => <ChatMessage key={nanoid()} message={msg} />)}
              <div ref={autoScroll} ></div>

            </main>
            <form onSubmit={sendMessage}>
              <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
              <button className='btn' type='submit'>✉️</button>
            </form>
          </div>
        )
      }
      
      function ChatMessage(props){
        const {text, uid, photoURL} = props.message
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
      
        return( 
          <div className={`message ${messageClass}`}>
            <img src={photoURL} alt='profile'  width='50px'/>
            <p>{text}</p>
          </div>
        )
      }

    return(
        <div>
            <Messages />
        </div>
    )
}

export default ChatRoom