import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../assets';
import {DEFAULT_LIST} from './constant';

export const Default = ({navigation}) => {
  const goPage = useCallback(
    name => {
      navigation.navigate(name);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.buttons}>
          {DEFAULT_LIST.map(({name, icon, route}) => (
            <TouchableOpacity
              key={name}
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => goPage(route)}>
              <Icon name={icon} color={colors.white} size={20} />
              <Text style={styles.txt}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    height: 60,
    backgroundColor: colors.primary,
    minWidth: 140,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    margin: 8,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 12,
  },
});
