import { React, useState, useLayoutEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Exercise from '../components/workout/Exercise'

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
    <View style={{ flex: 1, alignItems: 'center', width: '100%', backgroundColor: 'white' }}>
      <FlatList
        data={item.exercises}
        renderItem={({ item, index }) => <Exercise item={item} index={index} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
export default WorkoutShow
