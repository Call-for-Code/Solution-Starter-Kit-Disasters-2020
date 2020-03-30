import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import Map from './src/screens/map';

import { HomeIcon, ChatIcon, MapIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    <Tab.Screen
      name='Chat'
      component={ChatStackLayout}
      options={{
        tabBarIcon: ({color}) => (<ChatIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Map'
      component={MapStackLayout}
      options={{
        tabBarIcon: ({color}) => (<MapIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const ChatStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Ask a Question' component={Chat} />
  </Stack.Navigator>
);

const MapStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Locate Assistance' component={Map} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
