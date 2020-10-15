import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Index" 
        component={IndexScreen}
        options={({ navigation }) => {
          return {
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          };
        }}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
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

