import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const useCurrentTime = () => {
  function getCurrentTimeAndDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-11
    const year = date.getFullYear();
    const dateStr = `${day}/${month}/${year}`;
    const time = `${hours}:${minutes}:${seconds}`;

    return {time, dateStr};
  }

  const [currentTime, setCurrentTime] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);

  const updateTime = () => {
    const {time, dateStr} = getCurrentTimeAndDate();
    setCurrentTime(time);
    setCurrentDate(dateStr);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return [currentTime, currentDate];
};

export default useCurrentTime;

const styles = StyleSheet.create({});
