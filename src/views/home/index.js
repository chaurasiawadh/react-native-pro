import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import {colors} from '../../assets';
import {RoutesName} from '../../routes';

const FEATURES = [
  {title: 'Native Components', route: RoutesName.Default},
  {title: 'Icons', route: RoutesName.Icons},
  {title: 'Charts', route: RoutesName.Charts},
];
const CHARTS = [
  {title: 'Area Charts', route: RoutesName.AreaCharts},
  {title: 'Bar Charts', route: RoutesName.BarCharts},
  {title: 'Donut Charts', route: RoutesName.DonutCharts},
  {title: 'Line Charts', route: RoutesName.LineCharts},
  {title: 'Pie Charts', route: RoutesName.PieCharts},
  {title: 'Stock Charts', route: RoutesName.StockCharts},
];
export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconField}>
        {/* <Icon name="code" size={100} color={colors.primary} /> */}
        {/* <Image style={styles.logo} source={require('../image/icon.png')} /> */}
        <View style={styles.info}>
          {FEATURES.map(({title, route}) => (
            <TouchableOpacity
              style={styles.feature}
              key={title}
              onPress={() => navigation.navigate(route)}>
              <View style={styles.point} />
              <Text style={styles.infoTxt}>{title}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.charts}>
            {CHARTS.map(({title, route}) => (
              <TouchableOpacity
                style={styles.feature}
                key={title}
                onPress={() => navigation.navigate(route)}>
                <View style={styles.point} />
                <Text style={styles.infoTxt}>{title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(RoutesName.HomeView)}>
          <Text style={styles.txt}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  iconField: {
    flex: 0.7,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 100,
    elevation: 2,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 90,
    height: 90,
  },
  bottomArea: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    backgroundColor: colors.primary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  txt: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    margin: 24,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  point: {
    backgroundColor: colors.white,
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  infoTxt: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  charts: {
    marginLeft: 16,
  },
});
