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
import Emoji from "./Emoji";

interface Card {
  game: Game;
}

const GameCards = ({ game }: Card) => {
  return (
    <>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <HStack justify="space-between" marginBottom={2}>
            <PlatformsList
              platforms={game.parent_platforms.map(p => p.platform)}
            />
            <GameRating score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
