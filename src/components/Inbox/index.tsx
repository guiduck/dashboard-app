import { Flex, Spinner } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MailContext } from '../../contexts/MailContext';
import Menu from '../Menu';

const Inbox: React.FC = () => {

  const { menus } = useContext(MailContext);

  return (
    <Flex direction='column'>
      {menus && menus != undefined ?
        menus.map((menu) => {
          return (
            <Menu
              key={menu.id}
              menuId={menu.id}
              menuName={menu.name}
              subMenus={menu.subMenus}
            />
          );
        }) :
        <Spinner size='xl' />
      }
    </Flex>
  );
}

export default Inbox;