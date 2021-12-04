import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  Avatar,
  Flex,
  Divider,
  Checkbox,
  Stack,
  Button
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react';

const SearchBar: React.FC = () => {

  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex bg={bg}
      w="full"
      px={3}
      shadow="md"
      direction='column'
    >
      <Flex
        py={5}
        px={{ base: 2, sm: 4 }}
        spacing={3}
        display="flex"
        alignItems="center"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input w='full' type="tel" placeholder="Search..." />
        </InputGroup>
      </Flex>
      <Divider />
      <Stack py={3} spacing={4} direction='row' align='center' >
        <Checkbox defaultIsChecked>Selecionar todas</Checkbox>
        <Button size='sm'>
          Atribuir
        </Button>
        <Button size='sm'>
          Arquivar
        </Button>
        <Button size='sm'>
          Agendar
        </Button>
      </Stack>
    </Flex>
  );
}

export default SearchBar;