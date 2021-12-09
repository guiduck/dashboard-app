import { Button, Container, Flex, FormControl, FormErrorMessage, FormHelperText, Heading, Input, useColorModeValue } from '@chakra-ui/react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type User = {
  username: string,
  password: string
}

const AuthForm: React.FC = () => {

  const formBackground = useColorModeValue('gray.200', 'gray.700');
  const { signIn, isLoading, userIsAuthenticated } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } }: any = useForm<User>();

  const signInHandler = async(data: User) => {
    if (!userIsAuthenticated && data) {
      await signIn(data);
    }
  }

  useEffect(() => {
    if(userIsAuthenticated) {
      Router.push('/dashboard');
    }

  }, [userIsAuthenticated]);

  return (
    <Container>
      <Flex boxShadow='2xl' direction='column' background={formBackground} p={12} rounded={10} >
        <Heading mb={6}>
          Login
        </Heading>
        <form onSubmit={handleSubmit(signInHandler)}>
          <Flex>
            <FormControl mb={3} isInvalid={errors.username && errors.username.type === 'required'}>
              <Input id={2323} //next server side is gettign different id, needed to set it manually
                {...register('username', { required: true })}
                name='username'
                placeholder='username'
                variant='filled'
                type='text'
              />
              <FormHelperText id='13213' >username is admin</FormHelperText>
              <FormErrorMessage>Username is required</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mb={4} isInvalid={errors.password && errors.password.type === 'required'}>
              <Input id={8485}
                {...register('password', { required: true })}
                name='password'
                placeholder='******'
                variant='filled'
                type='password'
              />
              <FormHelperText id='15846'>password is admin</FormHelperText>
              <FormErrorMessage>Password is required</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex justifyContent='center' >
            <Button disabled={isLoading} isLoading={isLoading} type='submit' colorScheme='teal' >Sign in</Button>
          </Flex>
        </form>
        {/* <Flex>{JSON.stringify(user)}</Flex> */}
      </Flex>
    </Container>
  );
}

export default AuthForm;