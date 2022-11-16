import {LogBox} from 'react-native';
export default IgnoreLog = () => {
  LogBox.ignoreLogs([
    'Remote debugger is in a background tab which may cause apps to perform slowly',
    'Require cycle: node_modules/rn-fetch-blob/index.js',
    'Require cycle: node_modules/react-native/Libraries/Network/fetch.js',
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
    '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  ]);
};
