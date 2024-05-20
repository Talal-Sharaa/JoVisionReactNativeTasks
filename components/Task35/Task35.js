import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Task35 = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [timestamp, setTimestamp] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const createUser = () => {
    const user = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };
    setTimestamp(user.timestamp);
    storeUser(user);
  };
  const storeUser = async user => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  };
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      setUser(JSON.parse(user));
    } catch (e) {
      console.error(e);
    }
  };
  React.useEffect(() => {
    getUser();
  }, []);
  const compareTimestamps = () => {
    if (user) {
      const userTimestamp = new Date(user.timestamp).getTime();
      const newTimestamp = new Date().getTime();
      if (newTimestamp - userTimestamp < 60000) {
        return true;
      }
    }
  };
  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={
          compareTimestamps() && user ? user.name : 'Enter Your Name'
        }
      />
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder={compareTimestamps() && user ? user.age : 'Enter Your Age'}
      />
      <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder={
          compareTimestamps() && user ? user.country : 'Enter Your Country'
        }
      />
      <Text>{timestamp}</Text>
      <Button title="Submit" onPress={createUser} />
    </View>
  );
};

export default Task35;

const styles = StyleSheet.create({});
