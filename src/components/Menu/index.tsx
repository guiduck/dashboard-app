import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  chakra,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MailContext } from '../../contexts/MailContext';
import { ResizeContext } from '../../contexts/ResizeContext';

type SubMenu = {
  id: number,
  name: string
}

type Props = {
  menuId: number,
  menuName: string,
  subMenus: SubMenu[]
}

const Menu: React.FC<Props> = ({ menuId, menuName, subMenus }) => {

  const { setSelectedSubMenu } = useContext(MailContext);
  const { leftPanelWidth } = useContext(ResizeContext);

  const handleSelectedMenu = (menuId: number) => {
    setSelectedSubMenu(menuId);
  }

  return (
    <Flex minWidth='100%'>
      <Accordion allowMultiple style={{border: '0px solid rgba(0, 0, 0, 0)'}} >
          <AccordionItem>
              <AccordionButton >
                <Flex alignItems='center' width={leftPanelWidth - 30} minWidth={'200px'} px={10} justifyContent='space-between'>
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
              <Flex direction='column' width={leftPanelWidth - 30} minWidth={'200px'} px={10} >
                  {subMenus.map((submenu)=>{
                    return (
                      <Flex justifyContent='space-between' alignItems='center' >
                        <Button variant='ghost' key={submenu.id} onClick={()=>handleSelectedMenu(submenu.id)}>
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

export default Menu;