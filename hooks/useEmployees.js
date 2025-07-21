import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useEmployees = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const fetchEmployees = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const response = await fetch('https://dummyjson.com/users?limit=20');
      const data = await response.json();
      
      const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];
      
      const enhancedEmployees = data.users.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        phone: user.phone,
        address: user.address,
        image: user.image,
        department: departments[Math.floor(Math.random() * departments.length)],
        rating: Math.round((Math.random() * 4 + 1) * 2) / 2, // 1-5 with 0.5 steps
        bio: `Experienced professional with ${Math.floor(Math.random() * 10) + 1} years of experience.`,
        projects: Math.floor(Math.random() * 15) + 5,
        feedback: [
          { date: '2024-01', rating: Math.round((Math.random() * 4 + 1) * 2) / 2 },
          { date: '2024-02', rating: Math.round((Math.random() * 4 + 1) * 2) / 2 },
          { date: '2024-03', rating: Math.round((Math.random() * 4 + 1) * 2) / 2 }
        ]
      }));
      
      dispatch({ type: 'SET_EMPLOYEES', payload: enhancedEmployees });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch employees' });
    }
  };

  return { 
    employees: state.employees, 
    loading: state.loading, 
    error: state.error, 
    fetchEmployees 
  };
};