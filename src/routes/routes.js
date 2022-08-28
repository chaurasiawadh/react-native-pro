import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  BarCharts,
  Home,
  BasicBar,
  Charts,
  BasicColumn,
  ColumnRange,
  ColumnWithDrillDown,
  HtmlTable,
  NegativeColumn,
  NegativeStack,
  Stacked,
  StackedBar,
  StackedColumn,
  DonutChart,
  GradientFill,
  Legend,
  MonoChromeFill,
  PieChart,
  SemiCircleDonut,
  VariableRadiusPie,
  PieCharts,
  StockCharts,
  CandleStick,
  Column,
  CompareMultipleSeries,
  FlagsMarkingEvents,
  StockGUI,
  PointMarkers,
  SingleLineSeries,
  Spline,
  StepLine,
  StockArea,
  StockAreaRange,
} from '../views';
import {RoutesName} from './constant';
import {colors} from '../assets';
import {Git} from '../views/git';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const headerOption = headerTitle => {
  return {
    headerTitle,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <TouchableOpacity
        style={{padding: 20, paddingRight: 16}}
        // onPress={() =>
        //   navigation.navigate('Git', {
        //     url: `${urlCommon}${path}`,
        //     title: `${headerTitle} Code`,
        //   })
        // }
      >
        <Icon name="code" size={25} color="white" />
      </TouchableOpacity>
    ),
  };
};

const MyRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RoutesName.Home}
        component={Home}
        options={headerOption('React Native')}
      />
      <Stack.Screen
        name={RoutesName.Charts}
        component={Charts}
        options={headerOption('Charts')}
      />
      <Stack.Screen
        name={RoutesName.BarCharts}
        component={BarCharts}
        options={headerOption('Bar Charts')}
      />
      <Stack.Screen
        name={RoutesName.BasicBar}
        component={BasicBar}
        options={headerOption('Basic Bar')}
      />
      <Stack.Screen
        name={RoutesName.BasicColumn}
        component={BasicColumn}
        options={headerOption('Basic Column')}
      />
      <Stack.Screen
        name={RoutesName.ColumnRange}
        component={ColumnRange}
        options={headerOption('Column Range')}
      />
      <Stack.Screen
        name={RoutesName.ColumnWithDrillDown}
        component={ColumnWithDrillDown}
        options={headerOption('Column With Drill Down')}
      />
      <Stack.Screen
        name={RoutesName.HtmlTable}
        component={HtmlTable}
        options={headerOption('Html Table')}
      />
      <Stack.Screen
        name={RoutesName.NegativeColumn}
        component={NegativeColumn}
        options={headerOption('Negative Column')}
      />
      <Stack.Screen
        name={RoutesName.NegativeStack}
        component={NegativeStack}
        options={headerOption('NegativeStack')}
      />
      <Stack.Screen
        name={RoutesName.Stacked}
        component={Stacked}
        options={headerOption('Stacked')}
      />
      <Stack.Screen
        name={RoutesName.StackedBar}
        component={StackedBar}
        options={headerOption('StackedBar')}
      />
      <Stack.Screen
        name={RoutesName.StackedColumn}
        component={StackedColumn}
        options={headerOption('Stacked Column')}
      />
      <Stack.Screen
        name={RoutesName.PieCharts}
        component={PieCharts}
        options={headerOption('Pie Charts')}
      />
      <Stack.Screen
        name={RoutesName.DonutChart}
        component={DonutChart}
        options={headerOption('Donut Chart')}
      />
      <Stack.Screen
        name={RoutesName.GradientFill}
        component={GradientFill}
        options={headerOption('Gradient Fill')}
      />
      <Stack.Screen
        name={RoutesName.Legend}
        component={Legend}
        options={headerOption('Legend')}
      />
      <Stack.Screen
        name={RoutesName.MonoChromeFill}
        component={MonoChromeFill}
        options={headerOption('MonoChrome Fill')}
      />
      <Stack.Screen
        name={RoutesName.PieChart}
        component={PieChart}
        options={headerOption('Pie Chart')}
      />
      <Stack.Screen
        name={RoutesName.SemiCircleDonut}
        component={SemiCircleDonut}
        options={headerOption('SemiCircle Donut')}
      />
      <Stack.Screen
        name={RoutesName.VariableRadiusPie}
        component={VariableRadiusPie}
        options={headerOption('Variable Radius Pie')}
      />
      <Stack.Screen
        name={RoutesName.StockCharts}
        component={StockCharts}
        options={headerOption('Stock Charts')}
      />
      <Stack.Screen
        name={RoutesName.CandleStick}
        component={CandleStick}
        options={headerOption('Candle Stick')}
      />
      <Stack.Screen
        name={RoutesName.Column}
        component={Column}
        options={headerOption('Column')}
      />
      <Stack.Screen
        name={RoutesName.CompareMultipleSeries}
        component={CompareMultipleSeries}
        options={headerOption('Compare Multiple Series')}
      />
      <Stack.Screen
        name={RoutesName.FlagsMarkingEvents}
        component={FlagsMarkingEvents}
        options={headerOption('Flags Marking Events')}
      />
      <Stack.Screen
        name={RoutesName.StockGUI}
        component={StockGUI}
        options={headerOption('StockGUI')}
      />
      <Stack.Screen
        name={RoutesName.PointMarkers}
        component={PointMarkers}
        options={headerOption('Point Markers')}
      />
      <Stack.Screen
        name={RoutesName.SingleLineSeries}
        component={SingleLineSeries}
        options={headerOption('Single Line Series')}
      />
      <Stack.Screen
        name={RoutesName.Spline}
        component={Spline}
        options={headerOption('Spline')}
      />
      <Stack.Screen
        name={RoutesName.StepLine}
        component={StepLine}
        options={headerOption('StepLine')}
      />
      <Stack.Screen
        name={RoutesName.StockArea}
        component={StockArea}
        options={headerOption('Stock Area')}
      />
      <Stack.Screen
        name={RoutesName.StockAreaRange}
        component={StockAreaRange}
        options={headerOption('Stock Area Range')}
      />
      <Stack.Screen
        name={RoutesName.Git}
        component={Git}
        options={headerOption('Code')}
      />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  return <MyRoutes />;
};
