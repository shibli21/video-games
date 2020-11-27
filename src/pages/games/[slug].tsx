import { Badge, Box, Container, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";
import Spinner from "../../components/Spinner";
import useGame from "../../hooks/useGame";

const Game = () => {
  const router = useRouter();

  const { data: game, isLoading } = useGame(router.query.slug);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner />
      </Flex>
    );
  }
  return (
    <Container maxW="xl">
      <Text cursor="pointer" onClick={() => history.back()}>
        back
      </Text>
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
