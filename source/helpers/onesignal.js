import OneSignal from 'react-native-onesignal';
import {KEY_ONESIGNAL} from '../common';

const OneSignalInit = () => {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(KEY_ONESIGNAL);
  //END OneSignal Init Code

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    // console.log('Prompt response:', response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(
    notificationReceivedEvent => {
      console.log(
        'OneSignal: notification will show in foreground:',
        notificationReceivedEvent,
      );
      let notification = notificationReceivedEvent.getNotification();
      notificationReceivedEvent.complete(notification);
    },
  );

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
  });
};

export default OneSignalInit;
