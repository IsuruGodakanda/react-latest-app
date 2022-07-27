import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import { ModeNight } from "@mui/icons-material";
import useDarkMode from "./hooks/useDarkMode";
import { AppContainer, AppTitle } from "./AppStyles";

function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <Box>
      <Switch
        onChange={() => setTheme(colorTheme)}
        checked={colorTheme === "light"}
      />
      <AppContainer>
        <AppTitle variant="h4">React dark mode with TailwindCSS</AppTitle>
      </AppContainer>
      <ModeNight />
    </Box>
  );
}

export default App;
