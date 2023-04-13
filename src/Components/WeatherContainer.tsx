import { Box, CardContent, CardMedia, Typography, styled, Divider, IconButton } from "@mui/material";
import { ForecastType } from "../types/types";
import { getTodayDate } from "../services/currentDate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SettingsBrightness, Opacity, Brightness5, Brightness6, Cloud } from "@mui/icons-material";

type WeatherContainerProps = {
  weatherData: ForecastType | null;
};

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  "& > svg": {
    marginRight: 10,
  },
});

const WeatherContainerCard = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  flexDirection: "column",
});
const CardContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

const WeatherContainer = ({ weatherData }: WeatherContainerProps) => {
  let weatherUrl = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`;

  return !weatherData ? (
    <Box>No data Found</Box>
  ) : (
    <Box>
      <Typography variant="h5" align="center" fontWeight="Bold">
        Weather Details
      </Typography>
      <WeatherContainerCard
        sx={{
          flexDirection: {
            sm: "row",
            md: "column",
          },
        }}
      >
        <CardContainer
          sx={{
            width: {
              sm: 400,
              md: 600,
              lg: 800,
            },
            flexDirection: {
              sm: "column",
              md: "row",
            },
            height: {
              sm: 800,
              md: 450,
            },
            p: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              position: "relative",
              alignItems: "center",
              textAlign: "center",
              width: {
                sm: "350px",
                md: "50%",
              },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: "40px" }}>
              Today
            </Typography>
            <Typography component="span">
              {getTodayDate().currentDay} {","}
            </Typography>
            <Typography sx={{ marginRight: 1 }} component="span">
              {getTodayDate().currentDate}
            </Typography>
            <Typography component="span">{getTodayDate().currentMonth}</Typography>

            <CardMedia sx={{ height: 100, width: 150, left: 0, margin: "0 auto" }} image={weatherUrl} title="url" />
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }} variant="subtitle2">
              {weatherData?.weather[0]?.description}
            </Typography>
            <Typography sx={{ fontSize: "50px" }}>{weatherData?.main.temp}&deg;C</Typography>

            <CardContainer sx={{ flexDirection: "row" }}>
              <IconButton>
                <LocationOnIcon fontSize="large" />
              </IconButton>
              <Typography variant="h4" sx={{ textAlign: "center", padding: "2px 0" }}>
                {weatherData?.name}
              </Typography>
            </CardContainer>
          </Box>
          <Divider orientation="vertical" flexItem />

          <Box component="div" sx={{ position: "relative", alignItems: "left", width: "50%" }}>
            <CardContent
              sx={{
                width: {
                  xs: "300px",
                  sm: "500px",
                  md: "500px",
                },
              }}
            >
              <Row>
                <SettingsBrightness />
                Temperature: {weatherData?.main.temp}&deg;C
              </Row>
              <Row>
                <Opacity />
                Humidity: {weatherData?.main.humidity}
              </Row>
              <Row>
                <Brightness5 />
                Sun Rise: {new Date(weatherData?.sys.sunrise * 1000).toLocaleTimeString()}
              </Row>
              <Row>
                <Brightness6 />
                Sun Set: {new Date(weatherData?.sys.sunset * 1000).toLocaleTimeString()}
              </Row>

              <Row>
                <Cloud />
                Clouds: {weatherData?.clouds.all}%
              </Row>
            </CardContent>
          </Box>
        </CardContainer>
      </WeatherContainerCard>
    </Box>
  );
};

export default WeatherContainer;
