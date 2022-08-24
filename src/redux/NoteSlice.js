import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []

    },
    reducers: {
        addNote: (state, action) => {
            let notes = [{ ...action.payload }, ...state.notes];
            state.notes = notes;
        },
        editNote: (state, action) => {
            let editNote = action?.payload;
            let updateNotes = state.notes.map(note => {
                if (note?.id === editNote?.id) {
                    return {
                        ...note,
                        id: editNote.id,
                        title: editNote.title,
                        description: editNote.description
                    }
                }
            });
            state.notes = updateNotes;
        },
        deleteNote: (state, action) => {

            let id = action.payload?.id;
            let notes = state.notes;
            notes = notes.filter(item => item.id !== id);
            state.notes = notes;
        },
    }
});

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export const notes = state => state.notes;
export default noteSlice.reducer;