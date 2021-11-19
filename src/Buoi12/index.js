import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import OnboardScreen from './OnboardScreen';
import LoginScreen from './LoginScreen/ValidateWithFormik';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const ScreenStack = {
  LoginTab: 'LoginTab',
  Login: 'LoginScreen',
  Onboard: 'OnboardScreen',
  Home: 'HomeScreen',
  Detail: 'DetailScreen',
};

const LoginTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenStack.Onboard}
        options={{headerShown: false}}
        component={OnboardScreen}
      />
      <Tab.Screen
        name={ScreenStack.Login}
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </Tab.Navigator>
  );
};

export default class RootScreen extends Component {
  screenOptions = ({route}) => {
    return {
      tabBarIcon: ({focused}) => {
        const iconName = route.name === ScreenStack.Home ? 'home' : 'lock';
        return (
          <AntIcon
            name={iconName}
            size={30}
            color={focused ? 'tomato' : 'gray'}
          />
        );
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    };
  };

  render() {
    return (
      <Stack.Navigator screenOptions={this.screenOptions}>
        <Stack.Screen name={ScreenStack.Home} component={LoginTab} />
        <Stack.Screen
          name={ScreenStack.Detail}
          component={DetailScreen}
          initialParams={{backgroundColor: '#000'}}
        />
      </Stack.Navigator>
    );
  }
}
