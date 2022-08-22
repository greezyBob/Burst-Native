import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value, handleChange, placeholder, name, secureTextEntry, type }) => {

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={(text) => handleChange(name, text)}
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType={type} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
  },
  input: {

  },
})

export default CustomInput