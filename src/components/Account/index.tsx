import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, chakra, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MailContext } from '../../contexts/MailContext';

type SubMenu = {
  id: number,
  name: string
}

type Props = {
  menuId: number,
  menuName: string,
  subMenus: SubMenu[]
}

const Account: React.FC<Props> = ({ menuId, menuName, subMenus }) => {

  const { panelWidth } = useContext(MailContext);
  console.log(menuName, menuId, subMenus);

  return (
    <Flex minWidth='100%'>
      <Accordion allowMultiple style={{border: '0px solid rgba(0, 0, 0, 0)'}} >
          <AccordionItem>
              <AccordionButton >
                <Flex alignItems='center' width={panelWidth - 30} minWidth={'200px'} px={10} justifyContent='space-between'>
                  <Flex >
                    <AccordionIcon />
                    <Flex >
                      <Heading
                        color={useColorModeValue("gray.700", "white")}
                        size='sm'
                      >
                        {menuName}
                      </Heading>
                    </Flex>
                  </Flex>
                  <Flex>{subMenus.length}</Flex>
                </Flex>
              </AccordionButton>

            <AccordionPanel pb={4}>
              <Flex direction='column' width={panelWidth - 30} minWidth={'200px'} px={10} >
                  {subMenus.map((submenu)=>{
                    return (
                      <Flex justifyContent='space-between' alignItems='center' >
                        <Button variant='ghost' key={submenu.id}>
                          <chakra.p color={useColorModeValue("gray.600", "gray.300")}>
                            {submenu.name}
                          </chakra.p>
                        </Button>
                        <Flex>5</Flex>
                      </Flex>
                    );
                  })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default Account;