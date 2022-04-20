import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/actions/actions";
import { IconButton, Snackbar, stepClasses } from "@mui/material";
import { useState } from "react";
import React from "react";

const TestGraph = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleUsers = () => {
    setOpen(true);
    dispatch(getRequest());
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const users = useSelector((state) => state.users.users);
  console.log(users);

  return (
    <>
      <button className="test" onClick={handleUsers}>
        Тест GraphQL
      </button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        close={handleClose}
        autoHideDuration={1000}
        message="Успешный запрос"
        action={
          <React.Fragment>
            {users.length > 0 ? <span>{users[0].user.name}</span> : ""}
            <button
              onClick={handleClose}
              style={{
                background: "rgb(50, 50, 50)",
                border: "none",
                marginLeft: "10px",
              }}
              className="close-btn"
            >
              close
            </button>
          </React.Fragment>
        }
      />
    </>
  );
};

export default TestGraph;
