import { Flex, } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ResizeContext } from '../../contexts/ResizeContext';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';

const Layout: React.FC = ({ children }) => {

  const { user, userIsAuthenticated } = useContext(AuthContext);

  const { rightPanelWidth } = useContext(ResizeContext);

  return (
    <Flex  >
      {userIsAuthenticated ?
        <Flex  >
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
        <Flex height='100vh' width='100vw' >
          {children}
        </Flex>
      }
    </Flex>
  );
}

export default Layout;