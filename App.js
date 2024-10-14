import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';
import ExploreScreen from './ExploreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Página Inicial') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Biblioteca') {
              iconName = focused ? 'book' : 'book';
            } else if (route.name === 'Explorar') {
              iconName = focused ? 'search' : 'search';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Página Inicial" component={HomeScreen} />
        <Tab.Screen name="Biblioteca" component={LibraryScreen} />
        <Tab.Screen name="Explorar" component={ExploreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
