import {createSlice} from '@reduxjs/toolkit';

// initial state
export const initialState = {
  dataTodos: {
    items: [],
    error: false,
    msg: null,
    isLoad: true,
  },
  dataTodo: {
    items: [],
    error: false,
    msg: null,
    isLoad: true,
  },
  formTodo: {
    title: '',
  },
};

// our slice
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setDataTodos: (state, {payload}) => {
      state.dataTodos.error = payload.msg ?? false;
      state.dataTodos.items = payload.items;
      state.dataTodos.msg = payload.msg;
      state.dataTodos.isLoad = false;
    },
    setDataTodo: (state, {payload}) => {
      state.dataTodo.error = payload.msg ?? false;
      state.dataTodo.items = payload.items;
      state.dataTodo.msg = payload.msg;
      state.dataTodo.isLoad = false;
    },
    setFormTodo: (state, {payload}) => {
      state.formTodo = {
        ...state.formTodo,
        [payload.name]: payload.value,
      };
    },
  },
});

export const {setDataTodos, setDataTodo, setFormTodo} = globalSlice.actions;
export default globalSlice.reducer;
