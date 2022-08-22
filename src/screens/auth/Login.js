import { React, useState } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

import { getPayload, clientIsAuthenticated } from '../../helpers/auth'

const Login = ({ setIsSignedIn }) => {
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  
  const handleChange = (key, text) => {
    setLoginForm({ ...loginForm, [key]: text })
  }

  const handlePress = async () => {
    try {
      const { data } = await axios.post(
        'http://127.0.0.1:8000/api/auth/login/',
        loginForm
      )
      await AsyncStorage.setItem('burstapp', data.token)
      setIsSignedIn(clientIsAuthenticated())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomInput
        name='email'
        placeholder='email'
        value={loginForm.email}
        type='email-address'
        handleChange={handleChange}
      />
      <CustomInput
        name='password'
        placeholder='password'
        value={loginForm.password}
        handleChange={handleChange}
        secureTextEntry
      />
      <CustomButton handlePress={handlePress} />
    </View>
  )
}

export default Login
