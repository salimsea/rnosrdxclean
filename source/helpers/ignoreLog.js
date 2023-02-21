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
    'Mapbox warning eglSwapBuffer error: 12301. Waiting or new surface {"level": "warning", "message": "eglSwapBuffer error: 12301. Waiting or new surface", "tag": "Mbgl-TextureViewRenderThread"}',
    'Mapbox warning {Thread-8}[Android]: MapRenderer::onSurfaceCreated GlyphsRasterizationMode was specified without providing LocalIdeographFontFamily. Switching glyphsRasterizationMode to NoGlyphsRasterizedLocally mode. {"level": "warning", "message": "{Thread-8}[Android]: MapRenderer::onSurfaceCreated GlyphsRasterizationMode was specified without providing LocalIdeographFontFamily. Switching glyphsRasterizationMode to NoGlyphsRasterizedLocally mode.", "tag": "Mbgl"}',
    'Mapbox warning {Thread-9}[Android]: MapRenderer::onSurfaceCreated GlyphsRasterizationMode was specified without providing LocalIdeographFontFamily. Switching glyphsRasterizationMode to NoGlyphsRasterizedLocally mode. {"level": "warning", "message": "{Thread-9}[Android]: MapRenderer::onSurfaceCreated GlyphsRasterizationMode was specified without providing LocalIdeographFontFamily. Switching glyphsRasterizationMode to NoGlyphsRasterizedLocally mode.", "tag": "Mbgl"}',
    'RCTBridge required dispatch_sync to load REAModule. This may lead to deadlocks',
    'Sending `onAnimatedValueUpdate` with no listeners registered.',
    '-[RNCamera initializeAudioCaptureSessionInput]: Error Domain=AVFoundationErrorDomain Code=-11814 "Cannot Record" UserInfo={NSLocalizedDescription=Cannot Record, NSLocalizedRecoverySuggestion=Try recording again.}',
    'EventEmitter.removeListener',
    'RCTBridge required dispatch_sync to load REAModule. This may lead to deadlocks',
  ]);
};
