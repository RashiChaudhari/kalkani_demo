import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <h1>Search Anime Characters</h1>
        <SearchIcon />

        <TextField style={{ width: "50%" }}></TextField>
        <Button
          variant="contained"
          style={{ marginLeft: "30px", borderRadius: "20px" }}
        >
          Search
        </Button>
      </div>
      <div style={{}}></div>
    </>
  );
}

export default App;
