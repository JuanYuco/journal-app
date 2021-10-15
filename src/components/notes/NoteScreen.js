import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesoe title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="what happened today?"
                    className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img src="https://www.egames.news/__export/1628529816276/sites/debate/img/2021/08/09/zelda-y-link-1.jpg_242310155.jpg" alt="zelda" />
                </div>
            </div>
        </div>
    )
}
