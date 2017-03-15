export const changeHeaderTitle = (text) => {
  return {
    type: 'UPDATE_HEADER_TITLE'
  };
}

export const inputOnChange = (value) => {
  return {
    type: 'INPUT_CHANGED',
    inputVal: value
  };
}