import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Subscribe from "../common/Subscribe";
import Sketch from "../common/Sketch";
import RecentSubscriber from "../common/RecentSubscriber";

const Graph = () => {
  const year = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: { md: "1rem 2rem", xs: "1rem .5rem" } }}
    >
      <Grid item md={8} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1" sx={{ color: "#727272" }}>
              Subscribers
            </Typography>
            <Subscribe />
            <Sketch num="500" />
            <Sketch num="400" />
            <Sketch num="300" />
            <Sketch num="200" />
            <Sketch num="100" />
            <Sketch num="0" />
            <Grid
              container
              spacing={1}
              sx={{ padding: { md: "0 4rem", xs: "0 1rem" } }}
            >
              {year.map((item) => (
                <Grid key={item} item md={1} xs={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{ padding: { xs: ".5rem 0" } }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card>
          <CardContent>
            <Typography
              variant="subtitle1"
              sx={{ color: "#727272" }}
              gutterBottom
            >
              Recent Subscribers
            </Typography>
            <Divider variant="middle" />
            <RecentSubscriber />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Graph;
