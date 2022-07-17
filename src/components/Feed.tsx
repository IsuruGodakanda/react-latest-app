import { Box } from "@mui/material";
import React, { FC } from "react";
import { Post } from "./Post";

export const Feed: FC = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
  );
};
