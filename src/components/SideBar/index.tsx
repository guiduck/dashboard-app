import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ResizeContext } from '../../contexts/ResizeContext';
import Inbox from '../Inbox';

type Props = {
  username: string,
}

const SideBar: React.FC<Props> = ({ username }) => {

  const { leftPanelWidth, handleMouseDown } = useContext(ResizeContext);

  return (
    <>
      <Flex
        minWidth={leftPanelWidth}
        direction='column'
        px={2}
      >
        <Flex justifyContent='space-between' width='100%' minHeight='80px' p={8}>
          <Avatar
            name={username}
          />
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
      />
    </>
  );
}

export default SideBar;