import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GreetingScreen from './src/screens/GreetingScreen';
import ReportScreen from './src/screens/ReportScreen';
import OthersScreen from './src/screens/OthersScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Greeting" component={GreetingScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />
        <Tab.Screen name="Others" component={OthersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}