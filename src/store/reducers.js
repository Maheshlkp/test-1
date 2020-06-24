import { UPDATE_RESULT } from "./actions";

const initialState = {
  input: [],
  total: 0
};

function resultReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RESULT:
      const input = [...state.input, ...action.payload.split(",")];
      const result = input.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      return {
        input,
        total: result
      };
    default:
      return state;
  }
}

export default resultReducer;
