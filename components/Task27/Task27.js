import React, {useState} from 'react';
import {View, Image, StyleSheet, Button, Dimensions, Alert} from 'react-native';
import Image1 from '/home/talalleen/JoVisionReactNativeTasks/assets/4_Image.jpg';
import Image2 from '/home/talalleen/JoVisionReactNativeTasks/assets/b6a6d50de7eb36065b98ebd254d46cd5.jpg';
import Image3 from '/home/talalleen/JoVisionReactNativeTasks/assets/swjlpm53dcp61.webp';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Task27 = () => {
  const [image, setImage] = useState(Image1);

  const handleImageLoad = () => {
    Alert.alert('Image Selection', 'Select an Image', [
      {text: 'Image1', onPress: () => setImage(Image1)},
      {text: 'Image2', onPress: () => setImage(Image2)},
      {text: 'Image3', onPress: () => setImage(Image3)},
    ]);
  };

  return (
    <View>
      <Button title="Load Image" onPress={handleImageLoad} />
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Task27;
