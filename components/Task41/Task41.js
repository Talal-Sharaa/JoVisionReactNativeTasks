import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';

function ScreenOne({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen One</Text>
      <Button title="Go to Screen Two" onPress={() => navigation.navigate('Two')} />
      <Button title="Go to Screen Three" onPress={() => navigation.navigate('Three')} />
      <Button title="Go to Screen Four" onPress={() => navigation.navigate('Four')} />
    </View>
  );
}

function ScreenTwo({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Two</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('One')} />
      <Button title="Go to Screen Three" onPress={() => navigation.navigate('Three')} />
      <Button title="Go to Screen Four" onPress={() => navigation.navigate('Four')} />
    </View>
  );
}

function ScreenThree({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Three</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('One')} />
      <Button title="Go to Screen Two" onPress={() => navigation.navigate('Two')} />
      <Button title="Go to Screen Four" onPress={() => navigation.navigate('Four')} />
    </View>
  );
}

function ScreenFour({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Four</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('One')} />
      <Button title="Go to Screen Two" onPress={() => navigation.navigate('Two')} />
      <Button title="Go to Screen Three" onPress={() => navigation.navigate('Three')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="One" component={ScreenOne} />
        <Tab.Screen name="Two" component={ScreenTwo} />
        <Tab.Screen name="Three" component={ScreenThree} />
        <Tab.Screen name="Four" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
