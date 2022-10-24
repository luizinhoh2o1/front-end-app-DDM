import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AddProductPage from './src/pages/AddProduct';

export default function App() {
  return (
    <>
      <AddProductPage/>
      <StatusBar style="auto" />
    </>
  );
}