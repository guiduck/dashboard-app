import { Flex, Spinner } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { MailContext } from '../../contexts/MailContext';
import MailCard from '../MailCard';

type Email = {
  id: number,
  name: string,
  subject: string
  owner: string,
  users: string[]
}

const MailList: React.FC= () => {

  const { emails, emailIsLoading, setSelectedItems, archivedItems } = useContext(MailContext);

  useEffect(() => {
    setSelectedItems(new Array(emails.length).fill(false))
  }, [emails, archivedItems])

  return (
    <Flex direction='column' width='100%' p={5} >
      {emails && !emailIsLoading ?
        emails.map((email, index) => {
          return (
            <>
              {!archivedItems.includes(email.id) &&
                <MailCard
                  key={index}
                  id={email.id}
                  name={email.name}
                  subject={email.subject}
                  owner={email.owner}
                  users={email.users}
                  index={index}
                /> 
              }
            </>
          );
        }) :
        <Spinner size='xl' />
      }
    </Flex>
  );
}

export default MailList;