// import TextField from "@mui/material/TextField";
// import { FormControl } from "@mui/material";
// import React from "react";
// const Input = ({ label, type }: { label: string; type: string }) => {
// 	return (
// 		<FormControl fullWidth sx={{ marginTop: 3 }}>
// 			<TextField id="outlined-error" label={label} type={type} defaultValue="Hello World" />
// 		</FormControl>
// 	);
// };

type InputType = {
  [x: string]: any;
};

const Input = ({ ...props }: InputType) => {
  return (
    <div className="my-3">
      <input
        type="text"
        {...props}
        className="rounded-md border border-[#CDCDCD] w-full py-3 px-2 outline-none"
      />
    </div>
  );
};

export default Input;
