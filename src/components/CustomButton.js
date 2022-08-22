import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const CustomButton = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <Button title='Login' styles={styles.input} onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginVertical: 10,
  },
})

export default CustomButton
