import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { onAuthStateChanged, getAuth } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(() => {
        onAuthStateChanged( getAuth(), async ( user ) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingNotes(user.uid) );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if ( checking ) {
        return (
            <h1>Wait...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes path="/auth" component={ AuthRouter } isLoggedIn={ isLoggedIn } />
                    <PrivateRoutes path="/" component={ JournalScreen } isLoggedIn={ isLoggedIn } />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
