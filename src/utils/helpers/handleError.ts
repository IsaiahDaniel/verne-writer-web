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
