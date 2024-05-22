import React from 'react';
import {StyleSheet, View, useWindowDimensions, Image} from 'react-native';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ProfilePage from './ProfilePage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Task41 = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View style={{height: height, width: width}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={{
                    uri: 'https://static-00.iconduck.com/assets.00/home-icon-512x459-iwzgyv62.png',
                  }}
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsPage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={{
                    uri: 'https://static-00.iconduck.com/assets.00/settings-icon-512x512-0w6qh5yw.png',
                  }}
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutPage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={{
                    uri: 'https://static-00.iconduck.com/assets.00/help-about-symbolic-icon-512x512-thx4rsrt.png',
                  }}
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfilePage}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Image
                  source={{
                    uri: 'https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png',
                  }}
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Task41;

const styles = StyleSheet.create({});
