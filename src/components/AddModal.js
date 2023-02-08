import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./todo.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import DateTimePicker from "react-datetime-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "42rem",
  bgcolor: "#666699",
  borderRadius: "20px",
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const AddModal = (props) => {
  //   const [open, setOpen] = useState(false);
  const { open, onClose, dispatch, addTodo } = props;
  const [inputData, setInputData] = useState("");
  const [dateTime, setDateTime] = useState();

  // const [mopen, setMopen] = useState(`${open}`);
  console.log(dateTime);
  const checked = false;

  return (
    <div className="addItems">
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <form>
            <input
              type="text"
              placeholder="Add items...."
              value={inputData}
              required
              onChange={(event) => setInputData(event.target.value)}
            />
            {/* <DateTimePicker className="input" onChange={setDate} value={date} /> */}
            <label for="dateTime">
              Deadline Date and Time{" "}
              <input
                id="dateTime"
                name="dateTime"
                type="datetime-local"
                format="dd/mm/yyyy h:mm a"
                // placeholder="DD/MM/YYYY"
                value={dateTime}
                onChange={(event) => setDateTime(event.target.value)}
              />
            </label>

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Deadline"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={(event) => setDate(event)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
          </form>
          <div className="showItems">
            {/* {inputData ? ( */}
            <button
              className="btn effect04"
              data-sm-link-text="Add List"
              onClick={() =>
                dispatch(
                  addTodo(inputData, dateTime, checked),
                  setInputData(""),
                  setDateTime(""),
                  // setMopen(false)
                  onClose(false)
                )
              }
              disabled={!inputData}
            >
              <span>Add List</span>
            </button>
            {/* ) : null} */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;
