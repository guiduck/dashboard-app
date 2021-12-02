import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { useToast } from '@chakra-ui/toast';
import { signInRequest } from '../services/auth';

type SignInData = {
  username: string,
  password: string
}

type User = {
  username: string,
  password: string
}

type AuthContextType = {
  userIsAuthenticated: boolean;
  user: User,
  signIn: (data: SignInData) => Promise<void>,
  isLoading: boolean
}

export const AuthContext = createContext({ } as AuthContextType);

export const AuthProvider = ({ children }) => {
  const toast = useToast()

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userIsAuthenticated = !!user;

  const signIn = async({ username, password }: SignInData) => {
    setIsLoading(true);
    try {
      const { token, user } = await signInRequest({
        username,
        password
      })

      setCookie(undefined, 'auth.token', token, {
        maxAge: 60 * 60 * 1, //1 hour cookie
      }) //(ss, name, thing to save, options[had to add @types/cookie -> used by nookies])

      setUser(user);

      Router.push('/dashboard');
    }

     catch (e) {
      console.log('error', e);
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ userIsAuthenticated, signIn, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}