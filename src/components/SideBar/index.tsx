import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useCallback, useContext } from 'react';
import { MailContext } from '../../contexts/MailContext';
import Inbox from '../Inbox';

type Props = {
  username: string,
}

const SideBar: React.FC<Props> = ({ username }) => {

  const { panelWidth, setPanelWidth } = useContext(MailContext);

  const minPanelWidth = 250;
  const maxPanelWidth = 1000;

  const handleMouseDown = e => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minPanelWidth && newWidth < maxPanelWidth) {
      setPanelWidth(newWidth);
    }
  }, []);

  return (
    <>
      <Flex
        minWidth={panelWidth}
        direction='column'
        px={2}
      >
        <Flex justifyContent='space-between' minHeight='80px' mx={10} pt={5}>
          <Avatar
            name={username}
          />
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