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
import getCroppedUrl from "./image-url";

interface Card {
  game: Game;
}

const GameCards = ({ game }: Card) => {
  return (
    <>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
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
