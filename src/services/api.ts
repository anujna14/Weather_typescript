import axios from "axios";

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const REACT_APP_WEB_URL = process.env.REACT_APP_WEB_URL

export const getWeatherData = async (city: string) => {
  try {
    let response = await axios.get(`${REACT_APP_WEB_URL}?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    // console.log("am inside error");
    if (axios.isAxiosError(error)) {
    //   console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
