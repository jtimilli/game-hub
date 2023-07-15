import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Badge,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsList from "./PlatformsList";
import GameRating from "./GameRating";

interface Card {
  game: Game;
}

const GameCards = ({ game }: Card) => {
  return (
    <>
      <Card overflow="hidden" borderRadius={10}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justify="space-between">
            <PlatformsList
              platforms={game.parent_platforms.map(p => p.platform)}
            />
            <GameRating score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
