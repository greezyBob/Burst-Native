import React from 'react'
import { format } from 'date-fns'
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Pressable,
} from 'react-native'

export const Week = ({ item, index, navigation }) => {
  const weekStart = format(new Date(item.week_start), 'iii do MMM')
  const { width } = useWindowDimensions()
  return (
    <>
      <View style={{ width: width }}>
        <View style={{ backgroundColor: 'white', width: '100%', padding: 8 }}>
          <Text style={styles.titleText}>Week {index + 1}</Text>
          <Text style={styles.subTitleText}>{weekStart}</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: '10%' }}>
          <FlatList
            data={item.workouts}
            renderItem={({ item, index }) => (
              <Workout item={item} index={index} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  )
}

export const Workout = ({ item, index, navigation }) => {
  const handlePress = () => {
    navigation.navigate('Session', { index, item })
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.subTitleText}>
          Session {index + 1} - {item.title}
        </Text>
        <FlatList
          data={item.exercises}
          renderItem={({ item, index }) => (
            <Exercise item={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Pressable>
  )
}

export const Exercise = ({ item }) => {
  return (
    <>
      <Text style={{ fontSize: 15 }}>
        {item.title} - {item.description}
      </Text>
    </>
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  subTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 3,
    fontSize: 18,
  },
})
