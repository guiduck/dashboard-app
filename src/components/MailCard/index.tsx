import {
  Avatar,
  AvatarGroup,
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ResizeContext } from '../../contexts/ResizeContext';

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
  users
}) => {

  const { rightPanelWidth } = useContext(ResizeContext)

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.700")}
      px={1}
      pb={1}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        p={3}
        px={10}
        rounded="lg"
        boxShadow="2xl"
        bg={useColorModeValue("white", "gray.700")}
        _hover={{ bg: "gray.600" }}
        maxW={rightPanelWidth}
        width='100%'
      >
        <Flex width='100%' >
          <Flex alignItems='center' mx={5}>
            <Avatar
              name={name}
              size='xl'
              _hover={{ bg: "gray.500" }}
            />
          </Flex>
          <Flex direction='column' width='100%'>
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