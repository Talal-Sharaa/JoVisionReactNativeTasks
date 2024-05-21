import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Modal,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Text,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faRepeat} from '@fortawesome/free-solid-svg-icons';

const Task28 = () => {
  const [images, setImages] = useState([]);
  const {width, height} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const flatListRef = React.useRef();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        setImages(json.slice(0, 20));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const scrollToIndex = () => {
    setVisible(false);
    if (index < images.length) {
      flatListRef.current.scrollToIndex({animated: true, index: index});
    }
  };
  const deleteItem = index => {
    let temp = [...images];
    temp.splice(index, 1);
    setImages(temp);
  };
  const repeatItem = index => {
    let temp = [...images];
    let newImage = {...images[index], id: temp.length + 1};
    temp.push(newImage);
    setImages(temp);
  };
  return (
    <View style={{width: width, height: height}}>
      <Button title="Scroll to index" onPress={() => setVisible(true)} />
      <Button
        title="Change direction"
        onPress={() => setHorizontal(!horizontal)}
      />
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button title="Scroll to index" onPress={scrollToIndex} />
            <TextInput
              placeholder="Enter index"
              onChangeText={text => setIndex(parseInt(text) - 1)}
              style={{borderWidth: 1, width: 100, color: 'black'}}
            />
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={images}
        ref={flatListRef}
        horizontal={horizontal}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View>
            <Pressable onPress={() => Alert.alert(item.id.toString())}>
              <ImageBackground
                source={{uri: item.url}}
                style={
                  horizontal
                    ? {width: 50, height: 100}
                    : {width: '100%', height: 100}
                }>
                <View style={{position: 'absolute', right: 0, bottom: 0}}>
                  <Pressable onPress={() => deleteItem(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Pressable>
                </View>
                <View style={{position: 'absolute', left: 0, bottom: 0}}>
                  <Pressable onPress={() => repeatItem(index)}>
                    <FontAwesomeIcon icon={faRepeat} />
                  </Pressable>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        )}
        getItemLayout={(_, index) => {
          const itemHeight = 100;
          const itemWidth = 50;
          return {
            length: horizontal ? itemWidth : itemHeight,
            offset: horizontal ? itemWidth * index : itemHeight * index,
            index,
          };
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default Task28;
