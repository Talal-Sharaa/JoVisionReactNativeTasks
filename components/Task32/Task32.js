import {View, Text} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Task32 = props => {
  // props parameter added here
  return (
    <View>
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        navigator={props.navigator} // changed this.props.navigator to props.navigator
        paused={false}
      />
    </View>
  );
};

export default Task32;
