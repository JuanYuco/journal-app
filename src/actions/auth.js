import { googleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch( startLoading() );
        signInWithEmailAndPassword( getAuth(), email, password )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
                dispatch( finishLoading() );
            })
            .catch( e => {
                Swal.fire( 'Error', e.message, 'error' );
                dispatch( finishLoading() );
            });
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
                Swal.fire( 'Error', e.message, 'error' );
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

export const startLogout = () => {
    return async ( dispatch ) => {
        await signOut( getAuth() );
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
});