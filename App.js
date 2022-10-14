import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import BottomNav from './components/BottomNav';


export default function App() {
  const queryClient = useQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
