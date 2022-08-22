import React from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { clientIsAuthenticated } from '../helpers/auth'
const HomeScreen = ({ setIsSignedIn }) => {
  const handlePress = async () => {
    try {
      await AsyncStorage.removeItem('burstapp')
      const auth = await clientIsAuthenticated()
      setIsSignedIn(auth)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen!</Text>
      <Button title='Logout' onPress={handlePress} />
    </View>
  )
}

export default HomeScreen
