import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  removeTodo,
  checkedList,
  checkedAllTodo,
} from "../actions/index";
import AddModal from "./AddModal";
import "./todo.css";
import dayjs from "dayjs";

const Todo = () => {
  const [modalOpenClose, setModalOpenClose] = useState(false);
  const list = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();

  const checkAndRemove = (ele, event) => {
    dispatch(checkedList(ele, event));
    setTimeout(() => {
      dispatch(deleteTodo(ele));
    }, 3000);
  };

  const checkAndRemoveAll = () => {
    dispatch(checkedAllTodo());
    setTimeout(() => {
      dispatch(removeTodo());
    }, 3000);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>ToDo List Using Redux</figcaption>
          </figure>
          <div className="btn-row">
            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Add Items"
                onClick={() => setModalOpenClose(true)}
              >
                <span>Add Items</span>
              </button>
            </div>
            {list.length !== 0 ? (
              <div className="showItems">
                <button
                  className="btn effect04"
                  data-sm-link-text="Remove All"
                  onClick={() => dispatch(removeTodo())}
                >
                  <span>Remove All</span>
                </button>
              </div>
            ) : null}
            {list.length > 1 ? (
              <div className="showItems">
                <button
                  className="btn effect04"
                  data-sm-link-text="Check All List"
                  onClick={() => checkAndRemoveAll()}
                >
                  <span>Check All List</span>
                </button>
              </div>
            ) : null}
          </div>
          <AddModal
            open={modalOpenClose}
            onClose={() => setModalOpenClose(false)}
            dispatch={dispatch}
            addTodo={addTodo}
          />
          <div className="showItems">
            {list.map((ele) => {
              let dateTimeFormat = dayjs(ele.dateTime);
              return (
                <div className="eachItem" key={ele.id}>
                  <div className="leftItems">
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      checked={ele.checked}
                      // onChange={(event) =>
                      //   dispatch(checkedList(ele.id, event.target.checked))
                      // }
                      onChange={(event) =>
                        checkAndRemove(ele.id, event.target.checked)
                      }
                    />
                    <div className="listData-flex">
                      <h3
                        style={
                          ele.checked
                            ? { textDecoration: "line-through" }
                            : { textDecoration: "none" }
                        }
                      >
                        {ele.data}
                      </h3>
                      {ele.dateTime.length !== 0 ? (
                        <h3>
                          Deadline:{" "}
                          {dateTimeFormat.format(
                            "dddd, MMMM D, YYYY till hh:mm A"
                          )}
                        </h3>
                      ) : null}
                    </div>
                  </div>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete"
                    onClick={() => dispatch(deleteTodo(ele.id))}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
