import React, {useState} from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';

export const Switches = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [switchCheck, setSwitchCheck] = useState(false);
  const [colorTrueSwitchIsOn, setColorTrueSwitchIsOn] = useState(true);
  const [colorFalseSwitchIsOn, setColorFalseSwitchIsOn] = useState(false);

  const toggleSwitch = value => {
    setSwitchValue(value);
  };
  const toggleSwitches = value => {
    setSwitchCheck(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Default Switch</Text>
      <Switch
        style={styles.switchMargin}
        onValueChange={toggleSwitches}
        value={switchCheck}
      />
      <Text style={styles.fontSize}>{switchCheck ? 'ON' : 'OFF'}</Text>

      <Text style={styles.text2}>TintColor Switch</Text>

      <Switch
        style={styles.switchTop}
        onValueChange={toggleSwitch}
        value={switchValue}
        trackColor={{true: 'yellow', false: 'grey'}}
        tintColor="red"
        thumbTintColor="blue"
        onTintColor="black"
      />
      <Text style={styles.textFont}>
        {switchValue ? 'Switch is ON' : 'Switch is OFF'}
      </Text>

      <Text style={styles.text3}>OFF Condition Switch</Text>

      <Switch
        onValueChange={setColorFalseSwitchIsOn}
        onTintColor="blue"
        style={styles.switchBottom}
        thumbTintColor="#3b3b3b"
        tintColor="gray"
        value={colorFalseSwitchIsOn}
      />

      <Text style={styles.text4}>ON Condition Switch</Text>
      <Switch
        onValueChange={setColorTrueSwitchIsOn}
        onTintColor="#00ff00"
        thumbTintColor="#0000ff"
        tintColor="#ff0000"
        ios_backgroundColor="black"
        value={colorTrueSwitchIsOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  text2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  text3: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  text4: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  switchTop: {
    marginTop: 30,
  },
  textFont: {
    fontSize: 16,
  },
  switchBottom: {
    marginBottom: 10,
  },
});
