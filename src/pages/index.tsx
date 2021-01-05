import {
  Box,
  Container,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Game from "../components/Game";
import GameList from "../components/GameList";
import Spinner from "../components/Spinner";
import useNewGames from "../hooks/useNewGames";
import usePopularGames from "../hooks/usePopularGames";
import useSearchGames from "../hooks/useSearchGames";
import useUpcomingGames from "../hooks/useUpcomingGames";

export default function Home() {
  const router = useRouter();
  const upcomingGames = useUpcomingGames();
  const popularGames = usePopularGames();
  const newGames = useNewGames();
  const [search, setSearch] = useState("");

  const searchGames = useSearchGames(search);

  if (upcomingGames.isLoading || newGames.isLoading || popularGames.isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner />
      </Flex>
    );
  }

  let searchResults: JSX.Element;
  if (!searchGames.data) {
    searchResults = <Box>No data</Box>;
  }
  searchResults = searchGames.isLoading ? (
    <Spinner />
  ) : (
    <>
      <GameList title="Search results">
        {searchGames.data.results.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </GameList>
    </>
  );

  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <Container maxW="xl">
        <Text
          cursor="pointer"
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          mb={10}
          mt={4}
          onClick={() => router.reload()}
        >
          Games
        </Text>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values) => {
            setSearch(values.query);
          }}
        >
          {() => (
            <Box maxW="400px" mx="auto" mb={8}>
              <Form>
                <Field name="query">
                  {({ field }) => (
                    <FormControl>
                      <InputGroup>
                        <Input
                          {...field}
                          type="search"
                          id="query"
                          placeholder="search games... "
                          borderRadius={0}
                        />
                        <InputRightElement>
                          <IconButton
                            aria-label="search"
                            type="submit"
                            colorScheme="blue"
                            borderRadius={0}
                            icon={<FaSearch />}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
              </Form>
            </Box>
          )}
        </Formik>
        {search.length > 0 && searchResults}

        <GameList title="Upcoming Games">
          {upcomingGames.data.results.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </GameList>
        <GameList title="Popular Games">
          {popularGames.data.results.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </GameList>
        <GameList title="New Games">
          {newGames.data.results.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </GameList>
      </Container>
    </>
  );
}
