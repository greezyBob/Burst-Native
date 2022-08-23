import { React, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from 'react-native-paper'

const Exercise = ({ item, index }) => {
  const [checked, setChecked] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>
        {item.title} - {item.description}
      </Text>
      <Checkbox.Android
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default Exercise
