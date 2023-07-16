import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenres";
import getCroppedUrl from "./image-url";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id}>
          <HStack marginY={4}>
            <Image
              src={getCroppedUrl(genre.image_background)}
              borderRadius={4}
              boxSize="37px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
