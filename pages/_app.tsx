import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../src/contexts/AuthContext';
import { MailProvider } from '../src/contexts/MailContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <MailProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MailProvider>
    </ChakraProvider>
  );
}

export default MyApp