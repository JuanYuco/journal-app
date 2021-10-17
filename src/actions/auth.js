import { googleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        setTimeout(() => {
            signInWithEmailAndPassword( getAuth(), email, password )
                .then( ({ user }) => {
                    dispatch( login( user.uid, user.displayName ) )
                })
                .catch( e => {
                    console.log(e);
                })
        }, 3500);
    }
}

export const startRegisterWithEmailPassword = ( email, password, name ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        createUserWithEmailAndPassword( auth, email, password )
            .then( async ( { user } ) => {
                await updateProfile( auth.currentUser, { displayName: name } );
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
            });
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        signInWithPopup( getAuth(), googleAuthProvider )
            .then( ( { user } ) => {
                dispatch( login( user.uid, user.displayName ) )
            });
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
);