import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../src/contexts/AuthContext';
import { MailProvider } from '../src/contexts/MailContext';
import { ResizeProvider } from '../src/contexts/ResizeContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ResizeProvider>
        <MailProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </MailProvider>
      </ResizeProvider>
    </ChakraProvider>
  );
}

export default MyApp