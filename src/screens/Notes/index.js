import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notes from './Notes';
import { useSelector } from 'react-redux';
import { notes } from './../../redux/NoteSlice';

export default function index(props) {

  const { navigation } = props;

  const notesState = useSelector(notes);

console.log(notesState);

  const onAddNewNotePress = () => {
    navigation.navigate('AddNote');
  }

  const onItemPress = (note) => {

    navigation.navigate('AddNote', { note: note });
  }

  return (
    <Notes {...props} navigation={navigation} onItemPress={onItemPress}
      onAddNewNotePress={onAddNewNotePress} DATA={notesState?.notes} />
  )

}