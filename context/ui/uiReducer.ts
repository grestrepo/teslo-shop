import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toggle Side Menu' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Toggle Side Menu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};