/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import EmailConfirm from './screens/EmailConfirm';
import ResetPassword from './screens/ResetPassword';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home';
import Settings from './screens/Settings';
const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <RootStack.Screen
        name="/"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="EmailConfirm"
        component={EmailConfirm}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="HomeScreen"
          component={Home}
          options={{
            title: 'Intelligent Blocker',
          }}
        />
        <RootStack.Screen
          name="Setting"
          component={Settings}
          options={{
            title: 'Settings',
          }}
        />
    </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
