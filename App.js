import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return( 
    <Provider>
      <App />
    </Provider>
  )
}