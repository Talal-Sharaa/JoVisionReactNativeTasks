import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return(
  <View>
    {isLoading ? (
      <>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </>
    ) : (
      <Text>Talal Sharaa</Text>
    )}
  </View>
  );
};

export default Task18;
