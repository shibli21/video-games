import { Badge, Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import useGame from "../../hooks/useGame";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const Game = () => {
  const router = useRouter();

  const { data: game, isLoading } = useGame(router.query.slug);

  if (isLoading) {
    return <Box>Loading</Box>;
  }
  return (
    <Container maxW="xl">
      <Text fontWeight="bold" fontSize="xl">
        {game.name}
      </Text>
      <Text>Released : {game.released}</Text>
      <Flex>
        {game.platforms.map((p) => (
          <Badge colorScheme="teal">{p.platform.name}</Badge>
        ))}
      </Flex>
      <Image
        src={game.background_image}
        height={5000}
        width={10000}
        objectFit="cover"
      />
      <Text>{game.description_raw}</Text>
    </Container>
  );
};

export default Game;
