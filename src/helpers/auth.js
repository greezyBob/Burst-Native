import AsyncStorage from '@react-native-async-storage/async-storage'
import base64 from 'base-64'

export const getTokenFromLocalStorage = async () => {
  const token = await AsyncStorage.getItem('burstapp')
  return token
}

export const getPayload = async () => {
  try {
    const token = await AsyncStorage.getItem('burstapp')
    if (!token) return
    const payload = token.split('.')[1]
    return JSON.parse(base64.decode(payload))
  } catch (error) {
    console.log(error)
  }
}


//? check user is client
export const clientIsAuthenticated = async () => {
  //takes token from local storage
  const payload = await getPayload()
  if (!payload) return false
  //gets today date and make sure expiry is in the future
  // makes sure user is client
  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp && 'COACH' === payload.type
}
