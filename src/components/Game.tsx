import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Result } from "../types/global";

interface Props {
  game: Result;
}

const Game: React.FC<Props> = ({ game }) => {
  return (
    <Link href={`games/${game.slug}`}>
      <Box cursor="pointer" boxShadow="lg" borderRadius={5} overflow="hidden">
        {game.background_image && (
          <Image
            src={game.background_image}
            height={200}
            width={400}
            objectFit="cover"
          />
        )}
        <Box p={4}>
          <Text fontWeight="semibold">{game.name}</Text>
          <Text>{game.released}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Game;
