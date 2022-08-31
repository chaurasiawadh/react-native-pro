import React, {useCallback} from 'react';
import {RoutesName} from '../../routes/constant';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../assets';

export const HomeView = ({navigation}) => {
  const goPage = useCallback(
    name => {
      navigation.navigate(name);
    },
    [navigation],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => goPage(RoutesName.Charts)}>
        <Icon name="chart-bar" size={24} color={colors.white} />
        <Text style={styles.txt}>Charts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => goPage(RoutesName.Default)}>
        <Icon name="book-reader" size={24} color={colors.white} />
        <Text style={styles.txt}>Default Component</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => goPage(RoutesName.Icons)}>
        <Icon name="info" size={24} color={colors.white} />
        <Text style={styles.txt}>Icons</Text>
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
  button: {
    height: 100,
    backgroundColor: colors.primary,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 4,
  },
});
