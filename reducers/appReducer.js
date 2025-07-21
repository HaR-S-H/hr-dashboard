export const initialState = {
  employees: [],
  bookmarks: [],
  loading: false,
  error: null,
  currentEmployee: null,
  searchTerm: '',
  filters: {
    department: [],
    rating:[0]
  }
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_EMPLOYEES':
      return { ...state, employees: action.payload, loading: false };
    
    case 'SET_CURRENT_EMPLOYEE':
      return { ...state, currentEmployee: action.payload };
    
    case 'ADD_BOOKMARK':
      return { 
        ...state, 
        bookmarks: [...state.bookmarks, action.payload] 
      };
    
    case 'REMOVE_BOOKMARK':
      return { 
        ...state, 
        bookmarks: state.bookmarks.filter(id => id !== action.payload) 
      };
    
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    
      case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    
    case 'PROMOTE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(emp => 
          emp.id === action.payload 
            ? { ...emp, rating: Math.min(5, emp.rating + 0.5) } 
            : emp
        )
      };
    
    default:
      return state;
  }
};