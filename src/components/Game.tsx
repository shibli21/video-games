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
      <Box
        borderRadius={"30px"}
        fontFamily="poppins"
        cursor="pointer"
        boxShadow="sm"
        overflow="hidden"
        bg="#242731"
        _hover={{
          boxShadow: "2xl",
        }}
      >
        {game.background_image && (
          <Image
            src={game.background_image}
            height={250}
            width={400}
            objectFit="cover"
          />
        )}
        <Box px={6} pb={5} pt={3}>
          <Text fontWeight="semibold" fontSize="lg">
            {game.name}
          </Text>
          <Text fontSize="sm">Release date : {game.released}</Text>
          <Text>{game.tba}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Game;
