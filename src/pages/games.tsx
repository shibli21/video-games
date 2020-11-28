import { Center, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { Waypoint } from "react-waypoint";
import Spinner from "../components/Spinner";
import useInfiniteGames from "../hooks/useInfiniteGames";
interface Props {}

const games = (props: Props) => {
  const { isLoading, data, fetchMore, isFetchingMore } = useInfiniteGames();
  console.log(data);
  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner />
      </Flex>
    );
  }
  return (
    <Container maxW="xl" mb={20}>
      <Text my={10} fontSize="3xl" fontWeight="bold">
        All Games
      </Text>
      {data.map((d, i) => (
        <Fragment key={i}>
          {d.results.map((p, i) => (
            <Fragment key={p.name}>
              <Link href={`games/${p.slug}`}>
                <Flex
                  w="100%"
                  mb={2}
                  p={4}
                  border="1px solid"
                  borderColor="gray.500"
                  cursor="pointer"
                  boxShadow="sm"
                >
                  <Text>{p.name}</Text>
                  <Text>{p.released}</Text>
                </Flex>
              </Link>
            </Fragment>
          ))}
          {i >= data.length - 1 && (
            <Waypoint
              onEnter={({ previousPosition }) => {
                if (previousPosition !== "above") {
                  fetchMore();
                }
              }}
            />
          )}
        </Fragment>
      ))}
      <Center>{isFetchingMore && <Spinner />}</Center>
    </Container>
  );
};

export default games;
