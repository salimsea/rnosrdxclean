import {View, Text} from 'react-native';
import React from 'react';
import {fonts} from './utils';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: fonts.primary['custom'], fontSize: 30}}>
        BOILER TEMPLATE
      </Text>
      <Text style={{fontFamily: fonts.primary['custom'], fontSize: 25}}>
        - reactnative -
      </Text>
    </View>
  );
};

export default App;
