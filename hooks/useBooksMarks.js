import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useBookmarks = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const addBookmark = (employeeId) => {
    if (!state.bookmarks.includes(employeeId)) {
      dispatch({ type: 'ADD_BOOKMARK', payload: employeeId });
    }
  };
  
  const removeBookmark = (employeeId) => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload: employeeId });
  };
  
  const isBookmarked = (employeeId) => {
    return state.bookmarks.includes(employeeId);
  };
  
  return { 
    bookmarks: state.bookmarks, 
    addBookmark, 
    removeBookmark, 
    isBookmarked 
  };
};