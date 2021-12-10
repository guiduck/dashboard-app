import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode, useColorModeValue, Spinner } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ResizeContext } from '../../contexts/ResizeContext';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';

const Layout: React.FC = ({ children }) => {

  const { user, userIsAuthenticated } = useContext(AuthContext);

  const { rightPanelWidth } = useContext(ResizeContext);

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex maxWidth='100vw' h='100vh' style={{ overflowY: 'auto', overflowX: 'hidden' }} >
      {userIsAuthenticated ?
        <Flex >
          <Flex >
            <SideBar username={user.username} />
          </Flex>
          <Flex direction='column' minWidth={rightPanelWidth} >
            <SearchBar />
            <Flex >
              {children}
            </Flex>
          </Flex>
        </Flex> :
          <Flex w='full' alignItems='center' justifyContent='center'>
            <Spinner  size='xl' />
          </Flex>
      }
      <Flex style={{position: 'absolute', right: 30}}>
        <IconButton
          bg={useColorModeValue('gray.200', 'gray.700')}
          p={2}
          aria-label="theme"
          fontSize="20px"
          icon={<>{colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}</>}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
}

export default Layout;