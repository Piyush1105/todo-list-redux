import {
  ADD_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  CHECKED_TODO,
  CHECKEDALL_TODO,
} from "../constant";

const initialData = {
  list: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data, dateTime, checked } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            dateTime: dateTime,
            checked: checked,
          },
        ],
      };

    case DELETE_TODO:
      const newList = state.list.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case REMOVE_TODO:
      return {
        ...state,
        list: [],
      };

    case CHECKED_TODO:
      return {
        ...state,
        list: state.list.map((obj) =>
          obj.id === action.id
            ? {
                ...obj,
                checked: action.checked,
              }
            : obj
        ),
      };

    case CHECKEDALL_TODO:
      return {
        ...state,
        list: state.list.map((obj) =>
          obj.checked === false
            ? {
                ...obj,
                checked: true,
              }
            : obj
        ),
      };
    default:
      return state;
  }
};

export default reducer;
