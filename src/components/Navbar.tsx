import React, { useState } from "react";
import { Mail, ModeNight, Notifications, Terminal } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <AppBar position="sticky">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          REACT LATEST
        </Typography>
        <Terminal sx={{ display: { xs: "block", sm: "none" } }} />
        <div className="bg-white py-0 px-2.5 rounded-lg w-2/5">
          <InputBase placeholder="Search..." />
        </div>
        <Box className="hidden items-center gap-2.5 sm:flex">
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://avatars.githubusercontent.com/u/25604799?v=4"
            onClick={() => setOpen(true)}
          />
        </Box>
        <Box
          className="flex items-center gap-2.5 sm:hidden"
          onClick={() => setOpen(true)}
        >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://avatars.githubusercontent.com/u/25604799?v=4"
          />
          <Typography>Isuru</Typography>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
        <MenuItem>
          <ModeNight />
          <Switch
            onChange={() => setTheme(colorTheme)}
            checked={colorTheme === "light"}
          />
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
