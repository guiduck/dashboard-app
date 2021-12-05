import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MailContext } from '../../contexts/MailContext';
import Account from '../Account';

const Inbox: React.FC = () => {

  const { menus } = useContext(MailContext);

  return (
    <Flex direction='column'>
      {menus.map((menu) => {
        return (
          <Account
            key={menu.id}
            menuId={menu.id}
            menuName={menu.name}
            subMenus={menu.subMenus}
          />
        );
      })}
    </Flex>
  );
}

export default Inbox;