import React, {useEffect} from 'react';
import {StyleSheet, Platform, Animated} from 'react-native';
import {colors} from '../../common';
import {TabItem} from '../atoms';

const BottomNavigator = props => {
  useEffect(() => {
    let keyboardEventListeners;

    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  const render = () => {
    return (
      <Animated.View style={[styles.container]}>
        <BottomTabItem {...props} />
      </Animated.View>
    );
  };

  return render();
};

const BottomTabItem = ({state, descriptors, navigation}) => {
  return state.routes.map((route, index) => {
    const {options} = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <TabItem
        key={index}
        title={label}
        active={isFocused}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  });
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    elevation: 2,
    backgroundColor: colors.white,
    borderColor: '#D2D2D2',
    alignItems: 'flex-end',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    position: 'relative',
  },
});
