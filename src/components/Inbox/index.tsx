import { Flex } from '@chakra-ui/react';
import React from 'react';
import Account from '../Account';

const Inbox: React.FC = () => {
  return (
    <Flex direction='column'>
      <Account />
      <Account />
    </Flex>
  );
}

export default Inbox;