import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://m.media-amazon.com/images/I/31cL-TXyz0L._AC_SY355_.jpg)'
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un Nuevo Día</p>
                <p className="journal__journal_entry-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
