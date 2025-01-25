import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home/home.js';
import DetailsScreen from './pages/pagContato/contatos.js';


const Stack = createStackNavigator();


export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Agenda de Contatos' }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes do Contato' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  
  