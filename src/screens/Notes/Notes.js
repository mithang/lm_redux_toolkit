import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Notes = (props) => {
  const { DATA, onAddNewNotePress, onItemPress, isLoading } = props;

  const renderNotesList = () => {
    return (
      <FlatList data={DATA} renderItem={renderNotesItem} keyExtractor={item => item._id} />
    );
  }

  const renderNotesItem = ({ item }) => {

    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <View style={styles.itemContainer}>
          <View>
            <Text numberOfLines={1} style={styles.titleStyle}>{item?.title}</Text>
            <Text numberOfLines={2} style={styles.descriptionStyle}>{item?.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const renderAddNoteButton = () => {

    return (
      <TouchableOpacity style={styles.addNoteContainer}
        onPress={onAddNewNotePress}>
        <View style={styles.addNoteButton}>
          <Text style={styles.addNote}>Add a Note</Text>
        </View>
      </TouchableOpacity>
    );

  }

  return (
    <View style={styles.container}>
      {
        isLoading ? (<ActivityIndicator animating={isLoading} />) : renderNotesList()
      }
      {renderAddNoteButton()}
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    marginBottom: '1%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: '#737373',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    color: '#828282',
    fontSize: 14,
  },
  addNoteContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addNoteButton: {
    backgroundColor: '#6503a9',
  },
  addNote: {
    paddingVertical: '5%',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
})