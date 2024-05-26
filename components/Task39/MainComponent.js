import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ComponentOne from './ComponentOne';

const MainComponent = () => {
  const [showComponent, setShowComponent] = useState(true);
  const savedText = useSelector(state => state.text);

  return (
    <View style={styles.container}>
      <Button
        title={showComponent ? 'Hide Component One' : 'Show Component One'}
        onPress={() => setShowComponent(!showComponent)}
      />
      {showComponent && <ComponentOne savedText={savedText} />}
      <Text style={styles.text}>Stored Text: {savedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default MainComponent;
