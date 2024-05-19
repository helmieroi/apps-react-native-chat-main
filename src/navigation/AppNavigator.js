import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen'; 
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ReceiverListPage from '../screens/ReceiverListScreen/ReceiverListPage';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PublicStack = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      tabBarStyle: { display: 'none' },
      headerShown: false 
    })}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      tabBarStyle: { display: 'none' },
      headerShown: false 
    })}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> 
      <Stack.Screen name="Messages" component={ReceiverListPage} options={{ headerShown: false }} /> 
    
      
    </Stack.Navigator>
  );
};

const PrivateStack = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarStyle: { display: 'none' },
      headerShown: false 
    })}>
      
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> 
    <Stack.Screen name="Messages" component={ReceiverListPage} options={{ headerShown: false }} /> 
    
    </Tab.Navigator>
  );
};

function AppNavigator() {
  const {user} = useSelector(store=>store.user);
  return (
    <NavigationContainer> 
     {user?.isLoggedIn ? 
     <PrivateStack/> : 
     <PublicStack/>  } 
    </NavigationContainer>
  );
}

export default AppNavigator;
