import React from "react";
import { Container, Typography } from "@material-ui/core";
import useApi from "./api/useApi";
import CardList from "./components/CardList";


function App() {
  const {data, loading, error} = useApi();

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Loading state</Typography>
      <CardList loading={true}/>
      <Typography variant="h2">Fetched data</Typography>
      <CardList cardData={data} loading={loading} error={error}/>
    </Container>
  );
}

export default App;
