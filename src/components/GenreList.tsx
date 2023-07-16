import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenre();

  return (
    <VStack>
      {genres.map(genre => (
        <Box key={genre.id}>{genre.name}</Box>
      ))}
    </VStack>
  );
};

export default GenreList;
