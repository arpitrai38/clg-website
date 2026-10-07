import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </ThemeProvider>
  );
}
