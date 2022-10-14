import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import BottomNav from './components/BottomNav';


export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <BottomNav />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
