import { createContext } from 'react';

interface UIContextProps {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);