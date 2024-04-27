import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    //  create User Profile in Register Page
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update User
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //For Login User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google Sign In
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    //GitHub Sign In
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    //Twitter Sign In

    const twitterSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }

    //Sign Out
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [])

    const allValue = { createUser, updateUserProfile, signInUser, googleSingIn, githubSignIn, twitterSignIn, user, setUser, logOut, loading }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider  >
    );
};

export default FirebaseProvider;