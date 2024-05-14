import React, {Component} from 'react';
import MyFunctionPage from '../MyFunctionPage';
import {View} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native';
const Task20 = () => {
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
      {showComponent && <MyFunctionPage />}
    </View>
  );
};
export default Task20;
