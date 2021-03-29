import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Contextprovider";
import { Add_User } from "../context/Userreducer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Adduser() {
  const { userDispatch } = useContext(GlobalContext);
  const classes = useStyles();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    qualification: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitClicked = (e) => {
    e.preventDefault();
    userDispatch({ type: Add_User, payload: user });
    setUser({
      firstName: "",
      lastName: "",
      dob: "",
      qualification: "",
    });
  };
  return (
    <Card style={{ margin: "20px" }}>
      <CardContent>
        <form
          onSubmit={onSubmitClicked}
          className={classes.root}
          autoComplete="off"
        >
          <TextField
            name="firstName"
            label="First Name"
            value={user.firstName}
            required
            onChange={handelChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={user.lastName}
            required
            onChange={handelChange}
          />
          <TextField
            name="dob"
            required
            type="date"
            label="Date Of Birth"
            value={user.dob}
            onChange={handelChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="qualification"
            label="Qualification"
            value={user.qualification}
            onChange={handelChange}
            required
          />
          <Button type="submit">Add User</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Adduser;
