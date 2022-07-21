import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="h-screen">
      <Navbar />
      <Box className="flex items-center justify-center min-h-screen dark:bg-black">
        <Typography variant="h4" className="text-blue-600 dark:text-white">
          React dark mode with TailwindCSS
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
