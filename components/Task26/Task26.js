import React, {Component, useEffect} from 'react';
import {Button, Text} from 'react-native';
import {useState} from 'react';
const Task26 = () => {
  useEffect(() => {
    fetchIpAddressNonBlocking();
  }, []);

  const [IPText, setIPText] = useState('Show IP Address'); // More descriptive variable name
  const [isLoaded, setIsLoaded] = useState(false); // More descriptive variable name
  const fetchIpAddressNonBlocking = () => {
    setIsLoaded(false);
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        setIPText(data.ip);
      })
      .catch(error => console.error(error))
      .finally(() => {
        console.log('Request completed');
        setIsLoaded(true);
      });
  };
  const fetchIpAddressBlocking = async () => {
    try {
      setIsLoaded(false);
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      console.log(data);
      setIPText(data.ip);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Request completed');
    }
  };
  return (
    <>
      <Button
        title="Show IP Address - nonBlocking"
        onPress={fetchIpAddressNonBlocking}></Button>
      <Button
        title="Show IP Address - Blocking"
        onPress={fetchIpAddressBlocking}></Button>
      <Text>Your IP address is: {isLoaded ? IPText : 'Loading...'}</Text>
    </>
  );
};
export default Task26;
