import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleError = (error: Error) => {
	console.log("handle error ran", error);
	if (error instanceof AxiosError && error?.response == undefined) {
		return error.message;
	} else if (error instanceof AxiosError && error.response?.data?.message) {
    return toast.error(error.response?.data?.message);
  } else {
    return toast.error("Something went wrong!");
  }
};


export const handleGetError = (error: any) => {
	console.log("handle get error rann", error);
	if (error?.response == undefined) {
		return error.message;
	} else if (error?.response?.data?.message) {
		return error?.response?.data?.message;
	} else {
		return "Something went Wrong";
	}
};