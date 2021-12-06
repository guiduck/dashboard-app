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

const MailCard: React.FC = () => {



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
        <Flex>
          <Flex alignItems='center' mx={5}>
            <Avatar
              name='The Initials'
              size='xl'
              _hover={{ bg: "gray.500" }}
            />
          </Flex>
          <Flex direction='column'>
            <Flex justifyContent="space-between">
              <chakra.h1
                color={useColorModeValue("gray.700", "white")}
                fontWeight="700"
                fontSize="lg"
                textTransform="uppercase"
                minHeight='55px'
              >
                Authors name
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
                This is mail message
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                enim reprehenderit nisi, accusamus delectus nihil quis facere in
                modi ratione libero!
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
                <Avatar name='Oxi Doido' />
                <Avatar name='The Assfucker' />
                <Avatar name='Oxi Doido' />
                <Avatar name='Oxi Doido' />
              </AvatarGroup>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MailCard;