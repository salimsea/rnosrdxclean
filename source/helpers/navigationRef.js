import {createNavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) navigationRef.navigate(name, params);
};
export const goBack = () => {
  if (navigationRef.isReady()) navigationRef.goBack();
};
export const reset = () => {
  if (navigationRef.isReady()) navigationRef.reset();
};
