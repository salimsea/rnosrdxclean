import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {fonts} from '../../utils';
import {TouchableRipple} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: fonts.primary['custom'], fontSize: 30}}>
        HOME
      </Text>
      <TouchableRipple onPress={() => navigation.navigate('User')}>
        <Text style={{fontSize: 13}}>navigate</Text>
      </TouchableRipple>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
