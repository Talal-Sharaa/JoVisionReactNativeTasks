import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Task16 = () => {
  const [showText, setShowText] = useState(false); // More descriptive variable name

  return (
    <View>
      <Button title="Toggle Text" onPress={() => setShowText(!showText)} />
      {showText && <Text>Talal Sharaa</Text>}
    </View>
  );
};

export default Task16;
