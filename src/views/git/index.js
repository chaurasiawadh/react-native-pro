import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {colors} from '../../assets';

export const Git = ({navigation}) => {
  const navigationOptions = () => ({
    headerTitle: navigation.state.params.title,
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
  });

  useEffect(() => {
    navigationOptions();
  }, []);

  return (
    <WebView
      source={{uri: navigation.state.params.url}}
      style={{flex: 1}}
      scalesPageToFit={false}
    />
  );
};
