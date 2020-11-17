import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import fetchIcons from "./api/fetchIcons";
import CardList from "./components/CardList";

function App() {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchIcons();
      const data = await results.json();
      setCardData(data);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Loading state</Typography>
      <CardList />
      <Typography variant="h2">Fetched data</Typography>
      <CardList cardData={cardData} />
    </Container>
  );
}

export default App;
