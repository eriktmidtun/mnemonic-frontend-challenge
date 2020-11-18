import React from "react";
import {
  Button,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    padding: "2em",
    backgroundColor: "#f7f7f7",
  },
  grayedOut: {
    color: "#b3b3b3",
  },
  button: {
    fontWeight: "bold",
  },
});

const LoadingCard = ({ reversed }) => {
  const classes = useStyles();

  return (
    <Card
      component={Grid}
      direction={"column" + (reversed ? "-reverse" : "")}
      justify="flex-start"
      alignItems="flex-start"
    >
      <CardMedia
        className={classes.media}
        component={Grid}
        container
        justify="center"
        alignItems="center"
      >
        <CircularProgress size={"90px"} />
      </CardMedia>
      <div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.grayedOut}
          >
            Laster inn
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.grayedOut}
          >
            Beskrivelse
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="default" disabled className={classes.button}>
            Link
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default LoadingCard;
