import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import GpsInfo from './src/GpsInfo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex: 1, backgroundColor: '#0085D0'}}>
        <GpsInfo />
      </View>
    </SafeAreaView>
  );
};

export default App;
