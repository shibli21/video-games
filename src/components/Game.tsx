import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Result } from "../types/global";

interface Props {
  game: Result;
}

const Game: React.FC<Props> = ({ game }) => {
  return (
    <Box cursor="pointer" boxShadow="lg" borderRadius={5} overflow="hidden">
      <Image
        src={game.background_image}
        height={200}
        width={400}
        objectFit="cover"
      />
      <Box p={4}>
        <Text fontWeight="semibold">{game.name}</Text>
        <Text>{game.released}</Text>
      </Box>
    </Box>
  );
};

export default Game;
