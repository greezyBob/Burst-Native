import { React, useState, useLayoutEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const WorkoutShow = ({ navigation, route }) => {
  const [index] = useState(route.params.index)
  const [title] = useState(route.params.item.title)
  const { item } = route.params
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Session ${index + 1} - ${title}`,
    })
  }, [navigation])

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
        <Text>{item.exercises[1].title}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
})
export default WorkoutShow
