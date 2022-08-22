import React from 'react'
import Workouts from '../screens/Workouts'
import WorkoutShow from '../screens/WorkoutShow'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const WorkoutStack = createNativeStackNavigator()

const WorkoutScreenStack = () => {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen
        name='WorkoutsAll'
        options={{ headerShown: false }}
        component={Workouts}
      />
      <WorkoutStack.Screen
        name='Session'
        component={WorkoutShow}
      />
    </WorkoutStack.Navigator>
  )
}

export default WorkoutScreenStack
