import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleError = (error: Error) => {
  if (
    error instanceof AxiosError &&
    error.response?.data?.responseCode === "11" &&
    error?.response?.data?.errorMessage
  ) {
    return toast.error(error?.response?.data?.errorMessage);
  } else if (
    error instanceof AxiosError &&
    error.response?.data?.responseCode === "11" &&
    error?.response?.data?.responseDescription
  ) {
    return toast.error(error?.response?.data?.responseDescription);
  } else {
    return toast.error("Something went wrong!");
  }
};


export const handleGetError = (error: any) => {
	console.log("error", error);
	if (error?.response == undefined) {
		return error.message;
	} else if (error?.response?.data?.error) {
		return error?.response?.data?.error;
	} else {
		return "Something went Wrong";
	}
};