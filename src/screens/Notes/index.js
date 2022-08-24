import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Notes from './Notes';
// import { useSelector } from 'react-redux';
// import { notes } from './../../redux/NoteSlice';
import { getNotesList } from '../../services/Apis/Notes';

export default function index(props) {

  const { navigation } = props;
  // const notesState = useSelector(notes);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=>{

    let abortController = new AbortController();
    const unsubscribe = navigation.addListener('focus',()=>{
      getNotesListAPICall();
    });

    return ()=>{
      abortController.abort();
      unsubscribe;
    };

  },[navigation])

  const getNotesListAPICall = () => {
    console.log("get data");
    setIsLoading(true);
    getNotesList().then(res=>{
      setNotes(res?.data);
      setIsLoading(false);
    }).catch(e=>{
      setIsLoading(false);
    });
  }

  const onAddNewNotePress = () => {
    navigation.navigate('AddNote');
  }

  const onItemPress = (note) => {

    navigation.navigate('AddNote', { note: note });
  }

  return (
    <Notes {...props} navigation={navigation} 
      onItemPress={onItemPress}
      onAddNewNotePress={onAddNewNotePress} 
      DATA={notes} isLoading={isLoading}/>
  )

}