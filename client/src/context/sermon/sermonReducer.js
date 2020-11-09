import {
  ADD_SERMON,
  DELETE_SERMON,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SERMON,
  FILTER_SERMONS,
  CLEAR_FILTER,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_SERMON:
      return {
        ...state,
        sermons: [...state.sermons, action.payload],
      };
    case UPDATE_SERMON:
      return {
        ...state,
        sermons: state.sermons.map((sermon) =>
          sermon.id === action.payload.id ? action.payload : sermon
        ),
      };
    case DELETE_SERMON:
      return {
        ...state,
        sermons: state.sermons.filter((sermon) => sermon.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_SERMONS:
      return {
        ...state,
        filtered: state.sermons.filter((sermon) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return sermon.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
