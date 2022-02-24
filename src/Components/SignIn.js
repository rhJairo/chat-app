import React from "react";
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

function SignIn(props){

    function SignIn() {
        const signInWithGoogle = () => {
          const provider = new GoogleAuthProvider()
          // signInWithRedirect(auth, provider)
          signInWithPopup(props.auth, provider)
            .then((result) =>{
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
            })
        }
        
        return(
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        )
    }

    return(
        <div>
            <SignIn />
        </div>
    )
}

export default SignIn