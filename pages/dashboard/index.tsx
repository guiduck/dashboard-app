import React, { useContext } from 'react';
import Layout from '../../src/components/Layout';
import MailList from '../../src/components/MailList';
import { MailContext } from '../../src/contexts/MailContext';

const dashboard: React.FC = () => {

  return (
    <Layout>
      <MailList />
    </Layout>
  );
}

export default dashboard;