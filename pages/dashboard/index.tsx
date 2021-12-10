import Router from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../src/components/Layout';
import MailList from '../../src/components/MailList';
import { AuthContext } from '../../src/contexts/AuthContext';

const dashboard: React.FC = () => {

  const { userIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!userIsAuthenticated) {
      Router.push('/');
    }
  }, [])

  return (
    <Layout>
      <MailList />
    </Layout>
  );
}

export default dashboard;