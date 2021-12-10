import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Avatar, Button, Divider, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ResizeContext } from '../../contexts/ResizeContext';
import Inbox from '../Inbox';

type Props = {
  username: string,
}

const SideBar: React.FC<Props> = ({ username }) => {

  const { leftPanelWidth, handleMouseDown } = useContext(ResizeContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <>
      <Flex
        h='full'
        minWidth={leftPanelWidth}
        direction='column'
        px={2}
        bgGradient={useColorModeValue("linear(to-b, gray.100, white)", "linear(to-b, gray.700, gray.800)")}
      >
        <Flex justifyContent='space-between' width='100%' minHeight='80px' p={8}>
          <Menu>
            <MenuButton _focus={{ boxShadow: 'outline' }} >
              <Avatar as={Button} name={username} _hover={{ bg: 'gray.400' }} />
            </MenuButton>
            <MenuList>
              <Flex justifyContent='center'>{username}</Flex>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>

          <Menu >
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
          30
        </Flex>
        <Inbox />
      </Flex>
      <Flex
        style={{
          width: "5px",
          cursor: "ew-resize",
          padding: "4px 0 0",
          // borderTop: "1px solid #ddd",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 100,
        }}
        onMouseDown={e => handleMouseDown(e)}
        alignItems='center'
        justifyContent='center'
        mt={-100}
        color="gray.400"
      ><ChevronRightIcon w={7} h={7} /></Flex>
    </>
  );
}

export default SideBar;