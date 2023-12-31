import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  setSearch: (search: string) => void;
}

const NavBar = ({ setSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput setSearch={setSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
