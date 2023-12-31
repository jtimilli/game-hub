import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/game-grid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import GamesPlatforms from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/Heading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          setSearch={search => {
            setGameQuery({ ...gameQuery, search });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={4}>
            <GamesPlatforms
              selectedPlatforms={gameQuery.platform}
              onPlatformSelect={platform =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.order}
              onSelectSortOrder={order => setGameQuery({ ...gameQuery, order })}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
