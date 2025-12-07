import { Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const textColor = useColorModeValue("ink.800", "magenta.50");
  const iconColor = useColorModeValue("ink.600", "magenta.200");

  return (
    <form style={{ width: "100%" }} onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup borderRadius="full" overflow="hidden" bg="whiteAlpha.50" width="100%" height="52px">
        <InputLeftElement color={iconColor}>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          width="100%"
          height="52px"
          borderRadius="full"
          placeholder="Search games..."
          variant="filled"
          focusBorderColor="magenta.400"
          color={textColor}
          _placeholder={{ color: useColorModeValue("ink.500", "magenta.200") }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
