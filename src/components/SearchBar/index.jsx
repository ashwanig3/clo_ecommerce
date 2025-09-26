import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function SearchBar({ value, handleChange }) {
  return (
    <Box sx={{ width: "90%", maxWidth: "800px", margin: "40px auto" }}>
      <TextField
        fullWidth
        placeholder="Find the items you are looking for"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#aaa" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          input: {
            color: "#fff",
            padding: '15px',
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#1e1e1e", // dark background
            borderRadius: "20px",
            "& fieldset": {
              border: "1px solid #555", // subtle border
            },
            "&:hover fieldset": {
              border: "1px solid #888", // hover effect
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #aaa", // focus effect
            },
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
