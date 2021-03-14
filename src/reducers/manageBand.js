import nextId from "react-id-generator";

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let b = {name: action.name, id: nextId()}
      return { ...state, bands: [...state.bands, b] }

      case 'DELETE_BAND':
      let c = state.bands.filter(band => band.id != action.id)
      return { ...state, bands: c }

    default:
      return state;
  }
};
