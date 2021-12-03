import { Flex } from '@chakra-ui/react';
import React from 'react';
import MailCard from '../MailCard';

type Email = {
  id: number,
  name: string,
  subject: string
  owner: string,
  users: string[]
}

type Props = {
  emails: Email[]
}

const MailList: React.FC<Props> = ({ emails }) => {
  return (
    <Flex direction='column'>
      {emails.map((email, index) => {
        return (
          <MailCard key={index} />
        );
      })}
    </Flex>
  );
}

export default MailList;