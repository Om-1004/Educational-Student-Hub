import React from 'react'
import googleLogo from "../assets/images/google.webp"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase.js"

export default function OAuth() {

const handleGoogleClick = async() =>{
    try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)

        const result = await signInWithPopup(auth, provider)
        console.log(result)
    } catch (error) {
        console.log("Google error is: ",error);
    }

}
    return(
        <button onClick={handleGoogleClick} type="button" className="bg-white text-black font-semibold h-10 border rounded-lg hover:opacity-90 disabled:opacity-50 flex items-center justify-start px-4">
        <img src={googleLogo} alt="Google" className="h-6 mr-2" />
        <span className="text-lg flex-grow">Google</span>
    </button>
        
    )
}
