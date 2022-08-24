import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddNotes from './AddNotes';
import { useDispatch } from 'react-redux';
import { addNote,editNote,deleteNote } from '../../redux/NoteSlice'
import { v4 as uuidv4 } from 'uuid';
import {addANewNote,editANotesByID,deleteANote } from '../../services/Apis/Notes'

export default function index(props) {

  const dispatch = useDispatch();
  const note = props?.route?.params?.note;
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = props?.navigation;

  useEffect(() => {
    if (note !== null && note !== undefined) {
      onChangeTitle(note?.title);
      onChangeDescription(note?.description);
    }
  }, [])

  const addNoteAPICall = ()=>{
    console.log('gogo');
    let addANewNoteParam = {
      title: title,
      description: description
    }
    setIsLoading(true)
    addANewNote(addANewNoteParam).then(res=>{
      navigation.goBack();
      setIsLoading(false);
    }).catch(err=>{
      setIsLoading(false);
    })
  }

  const editANoteAPICall = ()=>{
    let editNoteParam = {
      title: title,
      description: description
    }
    setIsLoading(true)
    editANotesByID(note?._id,editNoteParam).then(res=>{
      navigation.goBack();
      setIsLoading(false);
    }).catch(err=>{
      setIsLoading(false);
    })
  }

  const deleteANoteAPICall = ()=>{
   
    setIsLoading(true)
    deleteANote(note?._id).then(res=>{
      navigation.goBack();
      setIsLoading(false);
    }).catch(err=>{
      setIsLoading(false);
    })
  }

  const onAddNewNotePress = () => {
    // let params = {
    //   id: uuidv4(),
    //   title: title,
    //   description: description
    // };

    // dispatch(addNote(params));
    // navigation.goBack();
    addNoteAPICall();
  }

  const onUpdateNotePress = () => {
    // let params = {
    //   id: note.id,
    //   title: title,
    //   description: description
    // };

    // dispatch(editNote(params));
    // navigation.goBack();
    editANoteAPICall();
  }

  const onDeleteNotePress = () => {
    // let params = {
    //   id: note.id
    // };

    // dispatch(deleteNote(params));
    // navigation.goBack();
    deleteANoteAPICall();
  }
  return (
    <AddNotes {...props}
      note={note}
      title={title}
      description={description}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onAddNewNotePress={onAddNewNotePress}
      onUpdateNotePress={onUpdateNotePress}
      onDeleteNotePress={onDeleteNotePress}
    />
  )
}
