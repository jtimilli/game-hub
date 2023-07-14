import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={[1, null, 2, null, 3, null, 5]}
        padding="10px"
        spacing={10}
      >
        {games.map(game => (
          <GameCards game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
