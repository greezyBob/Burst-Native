import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View, FlatList } from 'react-native'
import { getTokenFromLocalStorage } from '../helpers/auth'

import { Week } from '../components/workout/Week'

const Workouts = ({ navigation }) => {
  

  const [blocks, setBlocks] = useState([])
  const [weeks, setWeeks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [weeksPerPage, setWeeksPerPage] = useState(1)

  const indexLastWeek = currentPage * weeksPerPage
  const indexFirstWeek = indexLastWeek - weeksPerPage
  const currentWeek = weeks.slice(indexFirstWeek, indexLastWeek)

  useEffect(() => {
    const getBlocks = async () => {
      setLoading(true)
      const token = await getTokenFromLocalStorage()
      try {
        const { data } = await axios.get(
          'http://127.0.0.1:8000/api/blocks/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setLoading(false)
        setBlocks(data)
        setWeeks(data[0].weeks)
      } catch (error) {
        console.log(error)
        // setErrors(true)
      }
    }
    getBlocks()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {weeks.length ? (
        <FlatList
          data={weeks}
          renderItem={({ item, index }) => <Week item={item} index={index} navigation={navigation} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
        />
      ) : (
        <Text>You have no sessions set</Text>
      )}
    </View>
  )
}

export default Workouts
