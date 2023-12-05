import { toast } from "react-toastify";
import { getData } from "../core/api";

const fetchData = async (
  url: string,
  updateLoading: (loaderState: boolean) => void,
  errorMessage: string,
  urlParams?: {
    params: { limit: number; sortBy: string; sortDir: string; offset: number };
  }
) => {
  updateLoading(true);
  try {
    let response = await getData(url, urlParams);
    if (url.includes("/employee") || url.includes("/skills")) {
      if (!response.data.data) {
        throw new Error();
      }
      return response.data.data;
    } else return response.data;
  } catch (error) {
    toast.error(errorMessage);
  } finally {
    updateLoading(false);
  }
};

export default fetchData;
