import React from "react";
import { Grid, Typography } from "@material-ui/core";
import IconCard from "./IconCard";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";

const CardList = ({ cardData, loading, error, reversed }) => {
  if (loading) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <LoadingCard />
        </Grid>
      </Grid>
    );
  }
  if (error) {
    const customErrorComponent = (
      <Typography variant="h4" component="h2">
        custom component
      </Typography>
    );
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ErrorCard
            errorMessage={"custom error message"}
            component={customErrorComponent}
          />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={3}>
      {Object.keys(cardData).map((key, i) => {
        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <IconCard
              name={cardData[key].name}
              description={cardData[key].description}
              link={cardData[key].link}
              icon={cardData[key].icon}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
