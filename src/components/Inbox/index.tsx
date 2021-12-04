import { Flex } from '@chakra-ui/react';
import React from 'react';
import Account from '../Account';

type Props = {
  panelWidth: number
}

const Inbox: React.FC<Props> = ({panelWidth}) => {
  return (
    <Flex minWidth={panelWidth} direction='column'>
      <Account panelWidth={panelWidth} />
      <Account panelWidth={panelWidth} />
      <Account panelWidth={panelWidth} />
    </Flex>
  );
}

export default Inbox;