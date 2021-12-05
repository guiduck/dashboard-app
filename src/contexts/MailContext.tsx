import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

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

type MailContextType = {
  menus: Menu[],
  getMenus: () => Promise<void>,
  isLoading: boolean,
  panelWidth: number,
  setPanelWidth: Dispatch<SetStateAction<number>>
}

export const MailContext = createContext({} as MailContextType);

export const MailProvider = ({ children }) => {

  const [menus, setMenus] = useState<Menu[] | undefined>([]);
  const [panelWidth, setPanelWidth] = useState(250);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  const getMenus = async() =>{
    setIsLoading(true);
    try {
      const response = await api.get('/menus');
      setMenus(response.data);
    } catch(err) {
      console.log(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMenus();
  }, [user])

  return (
    <MailContext.Provider value={{ menus, getMenus, isLoading, panelWidth, setPanelWidth }}>
      {children}
    </MailContext.Provider>
  );
}