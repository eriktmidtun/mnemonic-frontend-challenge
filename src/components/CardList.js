import React from "react";
import { Grid } from "@material-ui/core";
import IconCard from "./IconCard";
import LoadingCard from "./LoadingCard";

const CardList = ({ cardData }) => {
  if (!cardData || Object.keys(cardData).length === 0) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <LoadingCard />
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
