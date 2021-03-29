import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalContext } from "../context/Contextprovider";
import Stylingwithage from "./Stylingwithage";
import User from "./User";
const CurrentUser = Stylingwithage(User);
function Users() {
  const {
    userState: { Users },
  } = useContext(GlobalContext);
  return (
    <Grid container style={{ margin: "10px" }} spacing={3}>
      {Users.map((user) => {
        return (
          <Grid item>
            <CurrentUser user={user} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Users;
