import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useSearch = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };
  
    const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };
  
  return { 
    searchTerm: state.searchTerm, 
    filters: state.filters, 
    setSearchTerm, 
    setFilters 
  };
};