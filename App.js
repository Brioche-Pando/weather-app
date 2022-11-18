import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import React from 'react'
import AppTabs from './navigation/AppTabs'


export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#121521' />
      <QueryClientProvider client={queryClient}>
        <AppTabs />
      </QueryClientProvider>
    </NavigationContainer>
  )
}
