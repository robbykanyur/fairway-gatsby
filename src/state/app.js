const initialState = {
  isMenuVisible: false
}

const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = isMenuVisible => ({
  type: TOGGLE_MENU, isMenuVisible
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuVisible: action.isMenuVisible };
    default:
      return state;
  }
};


