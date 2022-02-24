import React from 'react'

function Header(props){
    function SignOut(){
        return props.auth.currentUser && (
          <button onClick={() => props.auth.signOut()}>Sign Out</button>
        )
    }

    return(
        <header className='App-header'>
        Chat App
            <div>
                <SignOut />
            </div>
        </header>
    )
}

export default Header