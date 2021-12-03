import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import Inbox from '../Inbox';

type Props = {
  username: string,
}

const SideBar: React.FC<Props> = ({ username }) => {
  return (
    <Flex minWidth='300px' direction='column' px={6}>
      <Flex justifyContent='space-between' minHeight='80px' pt={5}>
        <Avatar />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            New
          </MenuButton>
          <MenuList>
            <MenuItem>Email</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Divider />

      <Flex py={5} justifyContent='space-around'>
        <Flex>
          Favoritas
        </Flex>
        39
      </Flex>
      <Inbox />
    </Flex>
  );
}

export default SideBar;