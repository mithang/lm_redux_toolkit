import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from '../screens/Notes';
import AddNote from '../screens/AddNotes';


const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="AddNote" component={AddNote} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})