import React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import {SvgUri} from 'react-native-svg';

const Task32 = () => {
  const {width, height} = useWindowDimensions();
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <View style={{...styles.container, width: width, height: height}}>
      <Video
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        style={styles.backgroundVideo}
        paused={isPaused}
        repeat={true}
      />
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => {
            setIsPaused(!isPaused);
          }}>
          <SvgUri
            uri={
              isPaused
                ? 'https://placehold.co/50x50/00ff00/ffffff?text=Play'
                : 'https://placehold.co/50x50/ff0000/ffffff?text=Pause'
            }
            style={styles.controlButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: '30%',
    height: '30%',
    resizeMode: 'cover',
  },
});

export default Task32;
