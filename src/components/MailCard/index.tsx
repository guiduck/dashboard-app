import {
  Avatar,
  AvatarGroup,
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

type Email = {
  id: number,
  name: string,
  subject: string
  owner: string,
  users: string[]
}

const MailCard: React.FC<Email> = ({
  name,
  subject,
  owner,
  users
}) => {

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      px={2}
      py={2}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        p={3}
        rounded="lg"
        boxShadow="2xl"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex >
          <Flex alignItems='center' mx={5}>
            <Avatar
              name={name}
              size='xl'
              _hover={{ bg: "gray.500" }}
            />
          </Flex>
          <Flex direction='column' minWidth='330px'>
            <Flex justifyContent="space-between">
              <chakra.h1
                color={useColorModeValue("gray.700", "white")}
                fontWeight="700"
                fontSize="lg"
                textTransform="uppercase"
                minHeight='55px'
              >
                {name}
              </chakra.h1>
              <chakra.span
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Mar 10, 2019
              </chakra.span>
            </Flex>

            <Box >
              <chakra.p color={useColorModeValue("gray.600", "gray.300")}>
                {subject}
              </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={1}>
              <Link
                color={useColorModeValue("brand.600", "brand.400")}
                _hover={{ textDecor: "underline" }}
              >
                Read more
              </Link>

              <AvatarGroup size='md' max={3} alignItems="center">
                {users.map((user) => {
                  return (
                    <Avatar name={user[0] + ' ' + user[1]} />
                  );
                })}
              </AvatarGroup>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MailCard;