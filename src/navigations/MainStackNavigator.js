import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'

// <CounterView/>
export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      {
        AppStack()
      }
    </NavigationContainer>
  )
}

