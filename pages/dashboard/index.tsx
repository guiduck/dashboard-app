import { Flex } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../src/components/Layout';
import MailList from '../../src/components/MailList';

const dashboard: React.FC = () => {
  return (
    <Layout>
      <MailList emails={new Array(3).fill({})}/>
    </Layout>
  );
}

export default dashboard;