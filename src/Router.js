import React from 'react';
import Config from '../config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Pages
import Categories from './app/pages/Categories';
import Meals from './app/pages/Meals';
import Detail from './app/pages/Details';

const Stack = createNativeStackNavigator();
const Options={
  headerStyle: {
    backgroundColor: 'white',
    
  },
  headerTintColor: '#ffa500',
  headerTitleStyle: {
    fontWeight: 'bold',
    color:'#ffa500',
    
  },
  headerTitleAlign:'center'
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={Options} />
        <Stack.Screen name="Meals" component={Meals}  options={Options} />
        <Stack.Screen name="Detail" component={Detail}  options={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
