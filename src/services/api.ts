import axios from "axios";

const API_KEY = "3adac129382597d816fcdcb10073b70a";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city: string) => {
  try {
    let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
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
