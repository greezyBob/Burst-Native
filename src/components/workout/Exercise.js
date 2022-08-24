import { React, useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { Checkbox, Divider } from 'react-native-paper'

const Exercise = ({ item, index }) => {
  const [checked, setChecked] = useState(item.complete)
  const { styles } = useStyle()
  return (
    <View style={styles.container}>
      <View style={styles.row}>
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
      <Divider bold/>
    </View>
  )
}

const useStyle = () => {
  const { width } = useWindowDimensions()
  const styles = StyleSheet.create({
    container: {
      width: width,
    },
    row: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
  return { styles }
}

export default Exercise
