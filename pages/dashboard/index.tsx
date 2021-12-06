import React from 'react';
import Layout from '../../src/components/Layout';
import MailList from '../../src/components/MailList';

const dashboard: React.FC = () => {

  return (
    <Layout>
      <MailList />
    </Layout>
  );
}

export default dashboard;