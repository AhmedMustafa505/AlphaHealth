import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from '@/components';

import HomeScreen from '../screens/HomeScreen';
import PlanScreen from '../screens/PlanScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import LearnScreen from '../screens/LearnScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon 
            name={route.name} 
            focused={focused} 
            color={color} 
            size={size} 
          />
        ),
        tabBarActiveTintColor: 'rgb(9, 53, 199)',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
          backgroundColor:'#4E8FF6'
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Plan" 
        component={PlanScreen} 
        options={{
          tabBarLabel: 'Plan',
        }}
      />
      <Tab.Screen 
        name="Exercises" 
        component={ExercisesScreen} 
        options={{
          tabBarLabel: 'Exercises',
        }}
      />
      <Tab.Screen 
        name="Learn" 
        component={LearnScreen} 
        options={{
          tabBarLabel: 'Learn',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator; 