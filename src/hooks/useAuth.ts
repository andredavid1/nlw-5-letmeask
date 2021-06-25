import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth(): React.ReactNode {
  const value = useContext(AuthContext);

  return value;
}
