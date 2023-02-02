import React from 'react';
import {NativeModules, Text} from 'react-native';
const {CalendarModule} = NativeModules;

const GpsInfo = () => {
  console.log(CalendarModule);
  console.log(CalendarModule.getText());
  const GPSText = CalendarModule.getText();

  return <Text>{GPSText}</Text>;
};

export default GpsInfo;
