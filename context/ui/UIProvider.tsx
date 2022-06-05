import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  isMenuOpen: boolean;
}

const initialUIState: UIState = {
  isMenuOpen: false
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, initialUIState);
  const toggleSideMenu = () => dispatch({type: '[UI] - Toggle Side Menu'});

  return (
    <UIContext.Provider value={{...state, toggleSideMenu}}>
      {children}
    </UIContext.Provider>
  );
};