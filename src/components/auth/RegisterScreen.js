import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: 'Juan Fernando Yuco Jimenez',
        email: 'juanfernandoyuco@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPassword( email, password, name ) );
        }
    }

    const isFormValid = () => {
        let response = true;
        let msg = '';

        if ( name.trim().length === 0 ) {
            msg = 'Name is required';
            response = false;
        } else if ( !validator.isEmail( email ) ) {
            msg = 'Email is not valid';
            response = false;
        } else if ( password !== password2 || password.length < 5 ) {
            msg = 'Password should be at least 6 characters and match';
            response = false;
        }

        if ( !response ) {
            dispatch( setError( msg ) );
        }else {
            dispatch( removeError() );
        }

        return response;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>
                {
                    msgError && (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }
                <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={ name } onChange={ handleInputChange } />
                <input type="text" placeholder="email" name="email" className="auth__input" autoComplete="off" value={ email } onChange={ handleInputChange } />
                <input type="password" placeholder="password" name="password" className="auth__input" value={ password } onChange={ handleInputChange } />
                <input type="password" placeholder="Comfirm Password" name="password2" className="auth__input" value={ password2 } onChange={ handleInputChange } />
                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>
                <Link to="/auth/login" className="link">
                    Already registerd?
                </Link>
            </form>
        </>
    )
}
