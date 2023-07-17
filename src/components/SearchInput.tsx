import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearch: (search: string) => void;
}

const SearchInput = ({ setSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) setSearch(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          variant="filled"
          borderRadius={20}
          placeholder="Seach games..."
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
