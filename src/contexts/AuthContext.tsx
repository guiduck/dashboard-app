import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { useToast } from '@chakra-ui/toast';
import { recoverUserInformation, signInRequest } from '../services/auth';

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
  isLoading: boolean,
  logout: Function
}

export const AuthContext = createContext({ } as AuthContextType);

export const AuthProvider = ({ children }) => {
  const toast = useToast()

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userIsAuthenticated = !!user;

  useEffect(() => {
    const { 'auth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

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

  const logout = () => {
    const { 'auth.token': token } = parseCookies()

    if (token) {
      destroyCookie(null, 'auth.token');
      setUser(null);
    }

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ userIsAuthenticated, signIn, user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}