import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function StepButton({ word }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 200,
        }}
      >
        {word}
      </Button>
    </ThemeProvider>
  );
}

export default StepButton;
