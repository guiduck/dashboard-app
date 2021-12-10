import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
  Flex,
  Divider,
  Checkbox,
  Stack,
  Button
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useContext } from 'react';
import { ResizeContext } from '../../contexts/ResizeContext';
import { MailContext } from '../../contexts/MailContext';

const SearchBar: React.FC = () => {

  const { rightPanelWidth } = useContext(ResizeContext);
  const { emails, isIndeterminate, setSelectedItems, allSelected, selectedItems, setarchivedItems, setOnSelectionMode, archivedItems } = useContext(MailContext);

  const bg = useColorModeValue("white", "gray.800");

  const handleFullSelection = (e) => {
    setSelectedItems(new Array(selectedItems.length).fill(e));
    setOnSelectionMode(e);
  }

  return (
    <Flex
      bg={bg}
      w="full"
      px={3}
      shadow="md"
      direction='column'
      ml={6}
    >
      <Flex
        py={8}
        pr={20}
        spacing={3}
        display="flex"
        alignItems="center"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input width={rightPanelWidth - 202} h='48px' type="tel" placeholder="Search..." />
        </InputGroup>
      </Flex>
      <Divider />
      <Stack py={3} spacing={4} direction='row' align='center' >
        <Checkbox
          isChecked={allSelected}
          isIndeterminate={isIndeterminate}
          onChange={(e) => handleFullSelection(e.target.checked)}
        />
        <Button size='sm'>
          Atribuir
        </Button>
        <Button size='sm' onClick={(e) => {
          console.log({selectedItems, emails})
            const allEmailsIds = selectedItems.map((isChecked, index) => ({emailId: emails[index].id, checked: isChecked}));
            const checkedEmailsIds = allEmailsIds.filter(email => email.checked).map(email => email.emailId);
            setarchivedItems([...archivedItems, ...checkedEmailsIds]);
          }}>
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