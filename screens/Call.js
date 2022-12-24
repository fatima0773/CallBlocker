/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import * as React from 'react';
import BlockedCalls from './BlockedCalls';
import MissedCalls from './MissedCalls';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();

export default function Call() {
  return (

      <Tab.Navigator
          screenOptions={{
              tabBarActiveTintColor: '#3B71F3',
              tabBarInactiveTintColor: '#ffffff',
              tabBarContentContainerStyle: {
                height: 50,
            backgroundColor: '#171717',
        },
    }}>
        <Tab.Screen name="Blocked Calls" component={BlockedCalls}  />
      <Tab.Screen name="Missed Calls" component={MissedCalls}  />
      </Tab.Navigator>

  );
}



