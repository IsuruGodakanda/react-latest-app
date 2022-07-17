import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Add } from "./components/Add";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { theme } from "./theme";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={{ ...theme, ...darkTheme }}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            mode={mode}
            setMode={(modeOption: PaletteMode) => {
              setMode(modeOption);
            }}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
