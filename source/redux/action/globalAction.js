import axios from 'axios';
import {setDataTodos} from '../slice/globalSlice';

export const getDataTodos = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      let data = res.data;
      dispatch(
        setDataTodos({
          items: data,
          isLoad: false,
        }),
      );
    });
  };
};
