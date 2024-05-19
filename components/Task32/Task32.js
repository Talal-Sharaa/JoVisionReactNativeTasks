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
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          setIsPaused(!isPaused);
        }}>
        <Video
          source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
          style={styles.backgroundVideo}
          paused={isPaused}
          repeat={true}
        />
      </TouchableOpacity>
      {isPaused && (
        <View style={styles.overlay}>
          <TouchableOpacity
            onPress={() => {
              setIsPaused(!isPaused);
            }}>
            <SvgUri
              uri="https://placehold.co/400x215/orange/white?text=Play"
              style={styles.playButton}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  playButton: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
});

export default Task32;
