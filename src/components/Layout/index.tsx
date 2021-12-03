import { Flex, HStack, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';

const Layout: React.FC = ({ children }) => {

  const { user, userIsAuthenticated } = useContext(AuthContext)

  return (
    <>
      {userIsAuthenticated ?
        <Flex height='100vh' width='100vw'>
          <Flex height='100%'>
            <Flex direction='column'>
              <SideBar username={user.username} />
            </Flex>
            <VStack height='100%'>
              <SearchBar />
              <Flex>
                {children}
              </Flex>
            </VStack>
          </Flex>
        </Flex> :
        <Flex height='100vh' width='100vw' >
          {children}
        </Flex>
      }
    </>
  );
}

export default Layout;