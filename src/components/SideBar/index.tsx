import { Avatar, Divider, Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
  username: string,
}

const SideBar: React.FC<Props> = ({ username }) => {
  return (
    <Flex minWidth='70px' direction='column'>
      <Flex justifyContent='space-between'>
        <Avatar />
        New - menuoptions
      </Flex>

      <Divider />
      <Flex justifyContent='space-between'>
        <Flex>
          Favoritas
        </Flex>
        39
      </Flex>
    </Flex>
  );
}

export default SideBar;