import {StyleSheet, Text, View} from 'react-native';
import useCurrentTime from '../useCurrentTime/useCurrentTime';
const Task34 = () => {
  const [currentTime, currentDate] = useCurrentTime();
  return (
    <View>
      <Text>{currentTime}</Text>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default Task34;

const styles = StyleSheet.create({});
