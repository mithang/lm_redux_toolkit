import { StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function AddNotes(props) {

  const {
    note,
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    onAddNewNotePress,
    onUpdateNotePress,
    onDeleteNotePress
  } = props;
  ;
  const renderNoteDetailView = () => {
    return (
      <View style={styles.noteDetailView}>
        <TextInput style={styles.titleInput} onChangeText={onChangeTitle}
          placeholder={'Enter title'} value={title} />
        <TextInput style={styles.descInput} onChangeText={onChangeDescription}
          placeholder={'Enter description'} value={description} multiline />
      </View>
    )
  }

  const renderUpdateAndDelNoteButton = () => {
    return (
      <View style={styles.updatecontent}>
        <TouchableOpacity onPress={onUpdateNotePress}>
          <View style={styles.updateButton}>
            <Text style={styles.updateTitle}>Update A Note</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteNotePress}>
          <View style={styles.updateButton}>
            <Text style={styles.updateTitle}>Delete A Note</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAddNoteButton = () => {
    return (
      <TouchableOpacity onPress={onAddNewNotePress}>
        <View style={styles.updateButton}>
          <Text style={styles.updateTitle}>Add A Note</Text>
        </View>
      </TouchableOpacity>);
  };


  return (
    <View style={styles.container}>
      {renderNoteDetailView()}
      {
        (note !== null && note !== undefined) ? renderUpdateAndDelNoteButton() :
          renderAddNoteButton()
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  updatecontent: {
    position: 'absolute',
    width: '100%',
    height: '16%',
    bottom: 0
  },
  noteDetailView: {
    height: '95%'
  },
  titleInput: {
    height: '7%',
    margin: 12,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  descInput: {
    height: '75%',
    margin: 12,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  updateButton: {
    backgroundColor: '#358856',

  },
  updateTitle: {
    paddingVertical: '5%',
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
})