import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchContainer from "./Components/SearchContainer";
import WeatherContainer from "./Components/WeatherContainer";
import { ForecastType } from "./types/types";
import { getWeatherData } from "./services/api";

const Container = styled(Box)({
  height: "100%",
  margin: "0 auto",
  width: "65%",
  background: "linear-gradient(to top, #7f7fd5, #86a8e7, #91eae4)",
});

function App() {
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [weatherData, setWeatherData] = useState<ForecastType | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleGetWeather = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchedValue.trim().length === 0) {
      setIsEmpty(true);
    } else {
      getWeatherDetails(searchedValue);
    }
  };

  const getWeatherDetails = (city: string) => {
    getWeatherData(city).then((response) => {
      if(response === 'Request failed with status code 404'){
        alert("Please enter a valid data")
        setSearchedValue("")
      }else{
       setWeatherData(response)
       setSearchedValue("")
      }
    });
  };

  return (
    <Container
      sx={{
        height: {
          sm: "100%",
          md: "100vh",
        },
      }}
    >
      <Header />
      <SearchContainer searchedValue={searchedValue} setSearchedValue={setSearchedValue} handleGetWeather={handleGetWeather} />
      {isEmpty && <Typography>Please enter the valid data</Typography>}
      {!weatherData ? (
        <Typography variant="h4" height={900} textAlign="center">
          No data found.........
        </Typography>
      ) : (
        <WeatherContainer weatherData={weatherData} />
      )}
    </Container>
  );
}

export default App;
