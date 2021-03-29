import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function User({ user, bg }) {
  return (
    <Card style={{ backgroundColor: bg, minWidth: "275" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Name:{user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2">Date Of Birth{user.dob}</Typography>
        <Typography variant="body2">
          Qualification {user.qualification}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default User;
