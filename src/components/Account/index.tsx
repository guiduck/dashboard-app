import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Account: React.FC = () => {
  return (
    <Flex >
      <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex width='200px' justifyContent='space-between'>
                  <Flex>
                    <AccordionIcon />
                    <Box flex='1' textAlign='left'>
                      Conta 1
                    </Box>
                  </Flex>
                  <Flex>15</Flex>
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex justifyContent='space-between'>
                <Flex>
                  Caixa de Entrada
                </Flex>
                <Flex>
                  15
                </Flex>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default Account;