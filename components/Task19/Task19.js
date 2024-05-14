import React, {Component} from 'react';
import MyClassComponent from '../MyClassComponent';
import {View} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native';
const Task19 = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [titleText, setTitleText] = useState('Show Component');
  return (
    <View>
      <Button
        title={titleText}
        onPress={() => {
          setShowComponent(!showComponent);
          setTitleText(showComponent ? 'Show Component' : 'Hide Component');
        }}
      />
      {showComponent && <MyClassComponent />}
    </View>
  );
};
export default Task19;
