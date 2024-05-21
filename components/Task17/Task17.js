import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Task17 = () => {
  const [showText, setShowText] = useState(false); // More descriptive variable name
  const [titleText, setTitle] = useState('Show Text'); // More descriptive variable name

  return (
    <View>
      <Button
        title={titleText}
        onPress={() => {
          setShowText(!showText);
          setTitle(showText ? 'Show Text' : 'Hide Text');
        }}
      />
      {showText && <Text>Talal Sharaa</Text>}
    </View>
  );
};

export default Task17;
