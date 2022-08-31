import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../assets';
import {RoutesName} from '../../routes';

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconField}>
        <Icon name="code" size={100} color={colors.primary} />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(RoutesName.HomeView)}>
        <Text style={styles.txt}>Get Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purpleLighter,
  },
  iconField: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
    backgroundColor: colors.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  txt: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
