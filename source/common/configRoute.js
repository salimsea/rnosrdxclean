import {CardStyleInterpolators} from '@react-navigation/stack';
const itemConfigOpenClose = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const configScreen = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: itemConfigOpenClose,
    close: itemConfigOpenClose,
  },
  headerShown: false,
};
