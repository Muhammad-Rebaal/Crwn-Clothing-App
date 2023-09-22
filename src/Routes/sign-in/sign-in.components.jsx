import React from 'react'
import { signInWithGooglePopup , createUserDocumentFromAuth } from '../../utils/Firebase.utils/Firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign-In</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn

// 6 C