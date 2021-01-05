import { Box, Grid, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GameListProps {
  title: string;
  children?: ReactNode;
}

const GameList = ({ title, children }: GameListProps) => {
  return (
    <Box mb={20}>
      <Text fontSize="3xl" mb={10} fontWeight="semibold">
        {title}
      </Text>
      <Grid
        justifyItems="center"
        gridTemplateColumns={[
          "1fr  ",
          "1fr 1fr ",
          "1fr 1fr 1fr ",
          "1fr 1fr 1fr 1fr",
        ]}
        gap={10}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default GameList;
