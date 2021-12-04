import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
  panelWidth: number
}

const Account: React.FC<Props> = ({panelWidth}) => {
  return (
    <Flex minWidth='100%'>
      <Accordion allowMultiple>
          <AccordionItem>

              <AccordionButton>
                <Flex minWidth={panelWidth} px={10} justifyContent='space-between'>
                  <Flex >
                    <AccordionIcon />
                    <Box flex='1' textAlign='left'>
                      Conta 1
                    </Box>
                  </Flex>
                  <Flex>15</Flex>
                </Flex>
              </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex minWidth={panelWidth} px={10} justifyContent='space-between'>
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