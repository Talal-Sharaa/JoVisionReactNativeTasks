import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainComponent />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
