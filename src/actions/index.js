import {
  ADD_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  CHECKED_TODO,
  CHECKEDALL_TODO,
} from "./../constant";

export const addTodo = (data, dateTime, checked) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      dateTime: dateTime,
      checked: checked,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

export const removeTodo = () => {
  return {
    type: REMOVE_TODO,
  };
};

export const checkedList = (id, checked) => {
  return {
    type: CHECKED_TODO,
    id: id,
    checked: checked,
  };
};

export const checkedAllTodo = () => {
  return {
    type: CHECKEDALL_TODO,
  };
};
