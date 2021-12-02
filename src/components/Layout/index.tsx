import { Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex height='100vh' width='100vw'>
      <HStack>
        <SideBar />
        <VStack>
          <SearchBar />
          <Flex>
            {children}
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default Layout;