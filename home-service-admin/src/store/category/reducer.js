import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  categories: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    // GET_ALL_CATEGORY
    case GET_ALL_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case GET_ALL_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
      };

      // Create a category
    case CREATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };

    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Update a category
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };

      case UPDATE_CATEGORY_SUCCESS:
        const updatedCategories = state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        });
      
        return {
          ...state,
          loading: false,
          categories: updatedCategories,
        };

    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    default:
      return state;
  }
};

export default category;
