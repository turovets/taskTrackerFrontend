const headerTitle = 'Hello maxdasd';

const sideNav = (
  state = {
    headerTitle,
    inputVal: headerTitle,
  },
  action
) => {
  switch (action.type) {

    case 'UPDATE_HEADER_TITLE':
      return {
        ...state,
        headerTitle: state.inputVal,
      };

    case 'INPUT_CHANGED':
      return {
        ...state,
        inputVal: action.inputVal
      }

    default:
      return state
  }
};
export default sideNav