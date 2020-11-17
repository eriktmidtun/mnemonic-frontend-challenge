import React from "react";
import {
    Button,
    CircularProgress,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
  } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    margin: "auto 0",
    width: "auto",
    height: "288px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grayedOut: {
    color: "#b3b3b3",
  },
});

const LoadingCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.grayedOut}>
          Laster inn
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.grayedOut}
        >
          Beskrivelse kommer her
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" disabled>
          Link til ikon
        </Button>
      </CardActions>
      <CardMedia className={classes.media}>
        <CircularProgress size={"12rem"} />
      </CardMedia>
    </Card>
  );
};

export default LoadingCard;
