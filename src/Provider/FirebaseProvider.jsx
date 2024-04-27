import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    //  create User Profile in Register Page
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //For Login User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google Sign In
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //GitHub Sign In
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    //Twitter Sign In

    const twitterSignIn = () => {
        return signInWithPopup(auth, twitterProvider)
    }

    //Sign Out
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }
    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const allValue = { createUser, signInUser, googleSingIn, githubSignIn, twitterSignIn, user, setUser, logOut }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider  >
    );
};

export default FirebaseProvider;