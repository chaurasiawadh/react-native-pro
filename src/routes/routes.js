import * as React from 'react';
import Clipboard from '@react-native-community/clipboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  Images,
  FlatLists,
  Progress,
  Scroll,
  SectionLists,
  Shares,
  Swipe,
  Switches,
  Texts,
  Web,
  Default,
  LineCharts,
  AreaCharts,
  DonutCharts,
  Icons,
  Fade,
  Loader,
  Shadow,
  Multiple,
  StyledPie,
  StyledDonut,
  D3Charts,
  StyledArea,
  StyledColumn,
} from '../views';
import {RoutesName} from './constant';
import {colors} from '../assets';
import {Git} from '../views/git';
import {TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeView} from '../views/home/homeView';

const Stack = createNativeStackNavigator();
const urlCommon =
  'https://raw.githubusercontent.com/chaurasiawadh/react-native-pro/main/src/views/';

const headerOption = (navigation, headerTitle, path) => {
  return {
    headerTitle,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => {
      if (headerTitle === 'React Native') {
        return <></>;
      }

      if (headerTitle === 'Code') {
        const copyToClipboard = url => {
          Clipboard.setString(url);
          Alert.alert('URL copied', 'Visit to browser for code');
        };

        return (
          <TouchableOpacity
            style={{padding: 20, paddingRight: 16}}
            onPress={() => copyToClipboard(path.params.url)}>
            <MatIcon name="content-copy" size={25} color="white" />
          </TouchableOpacity>
        );
      }

      return (
        <TouchableOpacity
          style={{padding: 16}}
          onPress={() =>
            navigation.navigate(RoutesName.Git, {
              url: `${urlCommon}${path}`,
              title: `${headerTitle} Code`,
            })
          }>
          <Icon name="code" size={25} color="white" />
        </TouchableOpacity>
      );
    },
  };
};

const MyRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RoutesName.Home}
        component={Home}
        options={({navigation}) =>
          headerOption(navigation, 'React Native', 'charts/charts.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Git}
        component={Git}
        options={({navigation, route}) =>
          headerOption(navigation, 'Code', route)
        }
      />
      <Stack.Screen
        name={RoutesName.HomeView}
        component={HomeView}
        options={({navigation}) =>
          headerOption(navigation, 'Home', 'home/homeView.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Charts}
        component={Charts}
        options={({navigation}) =>
          headerOption(navigation, 'Charts', 'charts/charts.js')
        }
      />
      <Stack.Screen
        name={RoutesName.BarCharts}
        component={BarCharts}
        options={({navigation}) =>
          headerOption(navigation, 'Bar Charts', 'charts/bar/bar.js')
        }
      />
      <Stack.Screen
        name={RoutesName.BasicBar}
        component={BasicBar}
        options={({navigation}) =>
          headerOption(navigation, 'Basic Bar', 'charts/bar/basicBar.js')
        }
      />
      <Stack.Screen
        name={RoutesName.BasicColumn}
        component={BasicColumn}
        options={({navigation}) =>
          headerOption(navigation, 'Basic Column', 'charts/bar/basicColumn.js')
        }
      />
      <Stack.Screen
        name={RoutesName.ColumnRange}
        component={ColumnRange}
        options={({navigation}) =>
          headerOption(navigation, 'Column Range', 'charts/bar/columnRange.js')
        }
      />
      <Stack.Screen
        name={RoutesName.ColumnWithDrillDown}
        component={ColumnWithDrillDown}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Column With Drill Down',
            'charts/bar/drillDownColumn.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.HtmlTable}
        component={HtmlTable}
        options={({navigation}) =>
          headerOption(navigation, 'Html Table', 'charts/bar/htmlTable.js')
        }
      />
      <Stack.Screen
        name={RoutesName.NegativeColumn}
        component={NegativeColumn}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Negative Column',
            'charts/bar/negativeColumn.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.NegativeStack}
        component={NegativeStack}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Negative Stack',
            'charts/bar/negativeStack.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.Stacked}
        component={Stacked}
        options={({navigation}) =>
          headerOption(navigation, 'Stacked', 'charts/bar/stacked.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StackedBar}
        component={StackedBar}
        options={({navigation}) =>
          headerOption(navigation, 'Stacked Bar', 'charts/bar/stackedBar.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StackedColumn}
        component={StackedColumn}
        options={({navigation}) =>
          headerOption(
            navigation,
            'StackedColumn',
            'charts/bar/stackedColumn.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.PieCharts}
        component={PieCharts}
        options={({navigation}) =>
          headerOption(navigation, 'Pie Charts', 'charts/pie/pie.js')
        }
      />
      <Stack.Screen
        name={RoutesName.DonutChart}
        component={DonutChart}
        options={({navigation}) =>
          headerOption(navigation, 'DonutChart', 'charts/pie/donutChart.js')
        }
      />
      <Stack.Screen
        name={RoutesName.GradientFill}
        component={GradientFill}
        options={({navigation}) =>
          headerOption(navigation, '', 'charts/pie/gradientFill.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Legend}
        component={Legend}
        options={({navigation}) =>
          headerOption(navigation, 'Legend', 'charts/pie/legend.js')
        }
      />
      <Stack.Screen
        name={RoutesName.MonoChromeFill}
        component={MonoChromeFill}
        options={({navigation}) =>
          headerOption(
            navigation,
            'MonoChrome Fill',
            'charts/pie/monoChromeFill.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.PieChart}
        component={PieChart}
        options={({navigation}) =>
          headerOption(navigation, 'Pie Chart', 'charts/pie/pieChart.js')
        }
      />
      <Stack.Screen
        name={RoutesName.SemiCircleDonut}
        component={SemiCircleDonut}
        options={({navigation}) =>
          headerOption(
            navigation,
            'SemiCircle Donut',
            'charts/pie/semiCircleDonut.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.StyledPie}
        component={StyledPie}
        options={({navigation}) =>
          headerOption(navigation, '3D Pie', 'charts/dimension/styledPie.js')
        }
      />
      <Stack.Screen
        name={RoutesName.VariableRadiusPie}
        component={VariableRadiusPie}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Variable Radius Pie',
            'charts/pie/variableRadiusPie.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.StockCharts}
        component={StockCharts}
        options={({navigation}) =>
          headerOption(navigation, 'Stock Charts', 'charts/stock/stock.js')
        }
      />
      <Stack.Screen
        name={RoutesName.CandleStick}
        component={CandleStick}
        options={({navigation}) =>
          headerOption(navigation, 'CandleStick', 'charts/stock/candleStick.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Column}
        component={Column}
        options={({navigation}) =>
          headerOption(navigation, 'Column', 'charts/stock/column.js')
        }
      />
      <Stack.Screen
        name={RoutesName.CompareMultipleSeries}
        component={CompareMultipleSeries}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Compare Multiple Series',
            'charts/stock/compareMultipleSeries.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.FlagsMarkingEvents}
        component={FlagsMarkingEvents}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Flags Marking Events',
            'charts/stock/flagsMarkingEvents.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.StockGUI}
        component={StockGUI}
        options={({navigation}) =>
          headerOption(navigation, 'Stock GUI', 'charts/stock/gui.js')
        }
      />
      <Stack.Screen
        name={RoutesName.PointMarkers}
        component={PointMarkers}
        options={({navigation}) =>
          headerOption(
            navigation,
            'PointMarkers',
            'charts/stock/pointMarkers.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.SingleLineSeries}
        component={SingleLineSeries}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Single Line Series',
            'charts/stock/singleLineSeries.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.Spline}
        component={Spline}
        options={({navigation}) =>
          headerOption(navigation, 'Spline', 'charts/stock/spline.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StepLine}
        component={StepLine}
        options={({navigation}) =>
          headerOption(navigation, 'StepLine', 'charts/stock/stepLine.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StockArea}
        component={StockArea}
        options={({navigation}) =>
          headerOption(navigation, 'Stock Area', 'charts/stock/stockArea.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StockAreaRange}
        component={StockAreaRange}
        options={({navigation}) =>
          headerOption(
            navigation,
            'Stock Area Range',
            'charts/stock/stockAreaRange.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.Default}
        component={Default}
        options={({navigation}) =>
          headerOption(navigation, 'Default', 'defaults/default.js')
        }
      />
      <Stack.Screen
        name={RoutesName.FlatLists}
        component={FlatLists}
        options={({navigation}) =>
          headerOption(navigation, 'FlatLists', 'defaults/flatList.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Images}
        component={Images}
        options={({navigation}) =>
          headerOption(navigation, 'Images', 'defaults/image.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Progress}
        component={Progress}
        options={({navigation}) =>
          headerOption(navigation, 'Progress', 'defaults/progress.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Scroll}
        component={Scroll}
        options={({navigation}) =>
          headerOption(navigation, 'Scroll', 'defaults/scroll.js')
        }
      />
      <Stack.Screen
        name={RoutesName.SectionLists}
        component={SectionLists}
        options={({navigation}) =>
          headerOption(navigation, 'SectionLists', 'defaults/sectionList.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Shares}
        component={Shares}
        options={({navigation}) =>
          headerOption(navigation, 'Shares', 'defaults/share.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Swipe}
        component={Swipe}
        options={({navigation}) =>
          headerOption(navigation, 'Swipe', 'defaults/swipe.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Switches}
        component={Switches}
        options={({navigation}) =>
          headerOption(navigation, 'Switches', 'defaults/switch.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Texts}
        component={Texts}
        options={({navigation}) =>
          headerOption(navigation, 'Texts', 'defaults/text.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Web}
        component={Web}
        options={({navigation}) =>
          headerOption(navigation, 'Web', 'defaults/web.js')
        }
      />
      <Stack.Screen
        name={RoutesName.LineCharts}
        component={LineCharts}
        options={({navigation}) =>
          headerOption(navigation, 'Line Charts', 'charts/line/index.js')
        }
      />
      <Stack.Screen
        name={RoutesName.AreaCharts}
        component={AreaCharts}
        options={({navigation}) =>
          headerOption(navigation, 'Area Charts', 'charts/area/index.js')
        }
      />
      <Stack.Screen
        name={RoutesName.DonutCharts}
        component={DonutCharts}
        options={({navigation}) =>
          headerOption(navigation, 'DonutCharts', 'charts/donut/donut.js')
        }
      />
      <Stack.Screen
        name={RoutesName.D3Charts}
        component={D3Charts}
        options={({navigation}) =>
          headerOption(navigation, '3D Chats', 'charts/dimension/3d.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StyledArea}
        component={StyledArea}
        options={({navigation}) =>
          headerOption(navigation, '3D Area', 'charts/dimension/styledArea.js')
        }
      />
      <Stack.Screen
        name={RoutesName.StyledColumn}
        component={StyledColumn}
        options={({navigation}) =>
          headerOption(
            navigation,
            '3D Column',
            'charts/dimension/styledColumn.js',
          )
        }
      />
      <Stack.Screen
        name={RoutesName.StyledDonut}
        component={StyledDonut}
        options={({navigation}) =>
          headerOption(navigation, '3D Donut', 'charts/dimension/3Donut.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Icons}
        component={Icons}
        options={({navigation}) =>
          headerOption(navigation, 'Icons', 'icon/index.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Fade}
        component={Fade}
        options={({navigation}) =>
          headerOption(navigation, 'Fade', 'defaults/fade.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Loader}
        component={Loader}
        options={({navigation}) =>
          headerOption(navigation, 'Loader', 'defaults/loader.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Shadow}
        component={Shadow}
        options={({navigation}) =>
          headerOption(navigation, 'Shadow', 'defaults/shadow.js')
        }
      />
      <Stack.Screen
        name={RoutesName.Multiple}
        component={Multiple}
        options={({navigation}) =>
          headerOption(navigation, 'Multiple', 'defaults/multiple.js')
        }
      />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  return <MyRoutes />;
};
