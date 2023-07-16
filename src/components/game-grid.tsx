import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import CardSkeleton from "./CardSkeleton";
import { useState } from "react";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const cards = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={[1, null, 2, null, 3, null, 5]}
        padding="10px"
        spacing={6}
      >
        {isLoading && cards.map(card => <CardSkeleton key={card} />)}
        {games.map(game => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
