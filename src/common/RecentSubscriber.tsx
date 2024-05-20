import { Box, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

const RecentSubscriber = () => {
  return (
    <Box sx={{ marginTop: 5, marginBottom: 3 }}>
      {[0, 1, 2].map((item) => (
        <React.Fragment key={item}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <Avatar />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: 2,
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "#5B5B5B" }}>
                Segun Agbawo
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#727272" }}>
                Freelancer Writer
              </Typography>
            </Box>
          </Box>
          {item !== 2 && <Divider variant="middle" sx={{ marginBottom: 1 }} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default RecentSubscriber;
