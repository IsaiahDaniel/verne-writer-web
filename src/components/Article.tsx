import { Grid } from "@mui/material";
import React from "react";
import CardSection from "../common/CardSection";

const Article = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: { md: "1rem 2rem", xs: "1rem .5rem" } }}
    >
      <Grid item xs={12} md={4}>
        <CardSection
          name="Gross Revenue Earned"
          currency="&#8358;"
          amount="0.00"
          message="&#8358;0 earned in the last 30 days"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSection
          name="Publications"
          amount="0"
          currency=""
          message="0 publication created in the last 30 days"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardSection
          name="Avg Read Rate"
          amount="0%"
          currency=""
          message="0% up in the last 30 days"
        />
      </Grid>
    </Grid>
  );
};

export default Article;
