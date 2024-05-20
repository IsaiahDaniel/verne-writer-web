import { Typography, Box, Button } from "@mui/material";
import Input from "../../common/Input";
import AddIcon from "@mui/icons-material/Add";
import ButtonInput from "../../common/ButtonInput";

const Step2 = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ marginTop: 5 }}>
        Create UserName
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        Lorem ipsum dolor sit amet consectetur
      </Typography>
      <Input label="Subscriber Email" type="email" />
      <Input label="Subscriber Email" type="email" />
      <Input label="Subscriber Email" type="email" />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontSize: { md: 11, xs: 8 },
          marginTop: 3,
        }}
        startIcon={<AddIcon />}
      >
        Add Another Subscriber
      </Button>
      <Box sx={{ marginBottom: 6 }}>
        <ButtonInput label="Submit" color="#000" />
      </Box>
    </Box>
  );
};

export default Step2;
