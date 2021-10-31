import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { id, body, title } = formValues;

    if ( note.id !== id ) {
        reset( note );
    }

    useEffect( () => {
        dispatch( activeNote( formValues.id, { ...formValues } ) );
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesoe title"
                    className="notes__title-input"
                    value={ title }
                    name="title"
                    onChange={ handleInputChange }
                />
                <textarea
                    placeholder="what happened today?"
                    className="notes__textarea"
                    value={ body }
                    name="body"
                    onChange={ handleInputChange }
                >
                </textarea>
                {
                    ( note.url ) &&
                    <div className="notes__image">
                        <img src={ note.url } alt="zelda" />
                    </div>
                }
            </div>
            <button className="btn btn-danger" onClick={ handleDelete }>Delete</button>
        </div>
    )
}
