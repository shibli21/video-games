import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Game from "../components/Game";
import usePopularGames from "../hooks/usePopularGames";
import useUpcomingGames from "../hooks/useUpcomingGames";

export default function Home() {
  const upcomingGames = useUpcomingGames();

  if (upcomingGames.isLoading) {
    return <Box>Loading....</Box>;
  }

  return (
    <Container maxW="xl">
      <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={10}>
        Games
      </Text>

      <Text fontSize="3xl" mb={10} fontWeight="semibold">
        Upcoming Games
      </Text>
      <Grid
        justifyItems="center"
        gridTemplateColumns={[
          "1fr  ",
          "1fr 1fr ",
          "1fr 1fr 1fr ",
          "1fr 1fr 1fr 1fr",
        ]}
        gap="20px"
      >
        {upcomingGames.data.results.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Grid>
    </Container>
  );
}
