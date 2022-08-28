import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../../assets';
import {BAR_CHARTS} from '../constants';

export const BarCharts = ({navigation}) => {
  const goPage = useCallback(
    name => {
      navigation.navigate(name);
    },
    [navigation],
  );

  const renderIcons = ({icon, type}) => {
    console.log('icon, type', icon, type);
    switch (type) {
      case 'FontAwesome5':
        return <Icon name={icon} color={colors.white} size={20} />;
      case 'MaterialCommunityIcons':
        return <MaterialIcon name={icon} color={colors.white} size={20} />;
      case 'MaterialIcons':
        return <MaterialIcons name={icon} color={colors.white} size={20} />;
      case 'SimpleLineIcons':
        return <SimpleLineIcons name={icon} color={colors.white} size={20} />;
      case 'Fontisto':
        return <Fontisto name={icon} color={colors.white} size={20} />;
      case 'AntDesign':
        return <AntDesign name={icon} color={colors.white} size={20} />;
      default:
        return <Icon name={icon} color={colors.white} size={20} />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.buttons}>
          {BAR_CHARTS.map(({name, icon, route, type}) => (
            <TouchableOpacity
              key={name}
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => goPage(route)}>
              {renderIcons({icon, type})}
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
    marginTop: 20,
  },
  button: {
    height: 100,
    backgroundColor: colors.primary,
    minWidth: 140,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    margin: 8,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 4,
  },
});
