import {configureStore} from '@reduxjs/toolkit';
import {slice} from './slice/slice';

export default configureStore(slice);
