import {
  Badge,
  Box,
  Container,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FaArrowLeft } from "react-icons/fa";
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
      <Box my={8}>
        <FaArrowLeft cursor="pointer" onClick={() => history.back()} />
      </Box>
      <Text fontWeight="bold" fontSize="xl">
        {game.name}
      </Text>
      <Text>Released : {game.released}</Text>
      <Wrap spacingX="10px" mb={4}>
        {game.platforms.map((p) => (
          <WrapItem>
            <Badge colorScheme="teal">{p.platform.name}</Badge>
          </WrapItem>
        ))}
      </Wrap>
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
