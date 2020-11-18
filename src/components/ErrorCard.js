import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    margin: "auto 0",
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ErrorCard = ({ errorMessage, component }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {errorMessage ? errorMessage : " "}
        </Typography>
      </CardContent>
      {component ? (
        <CardMedia className={classes.media}>{component}</CardMedia>
      ) : null}
    </Card>
  );
};

export default ErrorCard;
