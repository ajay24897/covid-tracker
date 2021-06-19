import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Home from './src/Pages/Home';
import Information from './src/Pages/Home/Information';
import Report from './src/Pages/Report';
import {gray, themeBlue} from './src/Constants/colorConst';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'W.H.O Report') {
            iconName = focused ? 'earth' : 'earth-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: themeBlue,
        inactiveTintColor: gray,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="W.H.O Report" component={Report} />
    </Tab.Navigator>
  );
}
const store = createStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Tabs"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Information" component={Information} />
            <Stack.Screen name="Tabs" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
