import {
  Box,
  Container,
  FormControl,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Game from "../components/Game";
import GameList from "../components/GameList";
import useNewGames from "../hooks/useNewGames";
import usePopularGames from "../hooks/usePopularGames";
import useSearchGames from "../hooks/useSearchGames";
import useUpcomingGames from "../hooks/useUpcomingGames";

export default function Home() {
  const upcomingGames = useUpcomingGames();
  const popularGames = usePopularGames();
  const newGames = useNewGames();
  const [search, setSearch] = useState("");

  const searchGames = useSearchGames(search);

  if ((upcomingGames.isLoading, newGames.isLoading, popularGames.isLoading)) {
    return <Box>Loading....</Box>;
  }

  let searchResults: JSX.Element;
  if (!searchGames.data) {
    searchResults = <Box>No data</Box>;
  }
  searchResults = searchGames.isLoading ? (
    <Box>loading</Box>
  ) : (
    <>
      <GameList title="New Games">
        {searchGames.data.results.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </GameList>
    </>
  );

  return (
    <Container maxW="xl">
      <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={10}>
        Games
      </Text>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          setSearch(values.query);
        }}
      >
        {(props) => (
          <Box maxW="400px" mx="auto">
            <Form>
              <Field name="query">
                {({ field }) => (
                  <FormControl>
                    <Input
                      {...field}
                      type="search"
                      id="query"
                      placeholder="search games... "
                      borderRadius={0}
                    />
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
  );
}
