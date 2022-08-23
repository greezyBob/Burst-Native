import { React, useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import Login from './src/screens/auth/Login'
import HomeScreen from './src/screens/HomeScreen'
import Profile from './src/screens/Profile'
import WorkoutScreenStack from './src/stacks/WorkoutScreenStack'

import { clientIsAuthenticated } from './src/helpers/auth'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    const checkSignIn = async () => {
      const value = await clientIsAuthenticated()
      setIsSignedIn(value)
    }
    checkSignIn()
    // console.log(isSignedIn)
  }, [])

  return isSignedIn ? (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Workouts') {
                iconName = 'barbell-outline'
              } else if (route.name === 'Profile') {
                iconName = 'person-circle-outline'
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name='Home'>
            {(props) => <HomeScreen {...props} setIsSignedIn={setIsSignedIn} />}
          </Tab.Screen>
          <Tab.Screen  name='Workouts' component={WorkoutScreenStack}/>
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login'>
            {(props) => <Login {...props} setIsSignedIn={setIsSignedIn} />}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
