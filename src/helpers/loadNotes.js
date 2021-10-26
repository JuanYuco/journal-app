import { db, collection, getDocs } from '../firebase/firebaseConfig';

export const loadNotes = async ( uid ) => {
    const notesSnap = await getDocs( collection( db, `${ uid }/journal/notes` ) );
    let notes = [];

    notesSnap.forEach( doc => {
        notes = [ ...notes, {
            id: doc.id,
            ...doc.data()
        }]
    });

    return notes;
}