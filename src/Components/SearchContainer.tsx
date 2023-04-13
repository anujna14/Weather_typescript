import { styled, Box, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainerBox = styled(Box)({
  paddingTop: "90px",
  paddingBottom: "20px",
});

type SearchProps = {
  searchedValue: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  handleGetWeather: (e: React.FormEvent) => void;
};
const SearchContainer = ({ searchedValue, setSearchedValue, handleGetWeather }: SearchProps) => {
  return (
    <SearchContainerBox>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: {
            xs: 200,
            sm: 300,
            md: 400,
            lg: 600,
          },
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          handleGetWeather(e);
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter the city"
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchContainerBox>
  );
};

export default SearchContainer;
