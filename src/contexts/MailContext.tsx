import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { api } from "../services/api";

type SubMenuItems = {
  id: number,
  authorName: string,
  subject: string,
  authorInitials: string,
  usersInitials: string[]
}

type SubMenu = {
  id: number,
  name: string
}

type Menu = {
  id: number,
  name: string,
  subMenus: SubMenu[]
}

type Email = {
  id: number,
  name: string,
  subject: string
  owner: string,
  users: string[]
}

type EmailFetchResult = {
  id: number,
  subMenuItems: Email[]
}

type MailContextType = {
  emails: Email[],
  emailIsLoading: boolean,
  menus: Menu[],
  menuIsLoading: boolean,
  selectedSubMenu: number,
  setSelectedSubMenu: Dispatch<SetStateAction<number>>,
  getEmailById: (data: number) => Promise<void>,
  selectedItems: boolean[],
  setSelectedItems: Dispatch<SetStateAction<boolean[]>>,
  allSelected: boolean,
  isIndeterminate: boolean,
  setarchivedItems: Dispatch<SetStateAction<number[]>>,
  archivedItems: number[],
  onSelectionMode: boolean,
  setOnSelectionMode: Dispatch<SetStateAction<boolean>>
}

export const MailContext = createContext({} as MailContextType);

export const MailProvider = ({ children }) => {

  const [selectedSubMenu, setSelectedSubMenu] = useState(11);
  const { response: menus, loading: menuIsLoading, error: menuError } = useApi({method: 'get', url: '/menus'});

  const [onSelectionMode, setOnSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [archivedItems, setarchivedItems] = useState([]);
  const allSelected = selectedItems.every(Boolean);
  const isIndeterminate = selectedItems.some(Boolean) && !allSelected;

  const [emails, setEmails] = useState<Email[] | undefined>([]);
  const [emailIsLoading, setEmailIsLoading] = useState(false);

  const getEmailById = async(menuId: number) => {
    setEmailIsLoading(true);
    try {
      const response = await api.get<EmailFetchResult>(`/items/${menuId}`);
      setEmails(response.data.subMenuItems);
    } catch (err) {
      console.log(err.message);
    } finally {
      setEmailIsLoading(false);
    }
  }

  useEffect(() => {
    getEmailById(selectedSubMenu);

  }, [selectedSubMenu]);

  return (
    <MailContext.Provider value={{
      emails,
      emailIsLoading,
      menus,
      menuIsLoading,
      selectedSubMenu,
      setSelectedSubMenu,
      getEmailById,
      selectedItems,
      setSelectedItems,
      allSelected,
      isIndeterminate,
      setarchivedItems,
      archivedItems,
      onSelectionMode,
      setOnSelectionMode
    }}>
      {children}
    </MailContext.Provider>
  );
}