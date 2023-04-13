import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const AppContainer = styled(AppBar)({
  width: "100%",
  position: "sticky",
  background: "linear-gradient(to top, #7f7fd5, #86a8e7, #91eae4)",
});
const Header = () => {
  return (
    <AppContainer>
      <Toolbar>
        <img
          style={{ width: "50px", borderRadius: "50%", margin: "12px" }}
          src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
          alt="weather-icon"
        />
        <Typography variant="h5">KeyForecast</Typography>
      </Toolbar>
    </AppContainer>
  );
};

export default Header;
