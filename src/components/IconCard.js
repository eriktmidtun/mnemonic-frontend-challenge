import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    padding: "2em",
    backgroundColor: "#f7f7f7",
  },
  img: {
    minWidth: "90px",
  },
  button: {
    fontWeight: "bold",
  },
});

const IconCard = ({ name, description, icon, link, reversed }) => {
  const [linkIsClicked, setLinkIsClicked] = useState(false);
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
        <img alt={name} src={icon} title={name} className={classes.img} />
      </CardMedia>
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setLinkIsClicked(true)}
            href={link}
            target="_blank"
            disabled={linkIsClicked}
            className={classes.button}
          >
            Link
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default IconCard;
