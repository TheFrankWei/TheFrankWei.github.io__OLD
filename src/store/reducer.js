 import * as actionTypes from './actions';

 const initialState = {
   ishovered: false,
   colorCode: '#112F41'
 };

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.LETTER_COLOR:
      return{

      };
    case actionTypes.LETTER_HOVERED:
      return{

      };
    default:
      return state;
  }
};

export default reducer;
