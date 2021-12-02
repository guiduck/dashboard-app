import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import AuthForm from '../src/components/AuthForm';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex height='800px' justifyContent='center' alignItems='center'>
        <AuthForm />
      </Flex>
    </>
  )
}

export default Home;