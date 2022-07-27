import tw from "twin.macro";
import styled from "styled-components";
import { Box, Typography, TypographyProps } from "@mui/material";

export const AppContainer = styled(Box)`
  ${tw`flex items-center justify-center min-h-screen dark:bg-black`}
`;

export const AppTitle = styled(Typography)<TypographyProps>`
  ${tw`text-blue-600 dark:text-white`}
`;
