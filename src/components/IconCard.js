import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const IconCard = ({ name, description, icon, link }) => {
  const [linkIsClicked, setLinkIsClicked] = useState(false);
  const classes = useStyles();
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => setLinkIsClicked(true)}
          color="primary"
          href={link}
          target="_blank"
          disabled={linkIsClicked}
        >
          Link til ikon
        </Button>
      </CardActions>
      <CardMedia
        component="img"
        alt={name}
        width="auto"
        image={icon}
        title={name}
      />
    </Card>
  );
};

export default IconCard;
