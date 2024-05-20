import { Box, Divider, Grid } from "@mui/material";
import React from "react";

const Sketch = ({ num }: { num: string }) => {
  return (
    <Box
      sx={{
        marginBottom: 5,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", textAlign: "center" }}
      >
        <Grid item xs={0.5}>
          {num}
        </Grid>
        <Grid item xs={11.5}>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sketch;
