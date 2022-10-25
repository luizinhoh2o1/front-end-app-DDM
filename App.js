import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import AddProductPage from './src/pages/AddProduct';

export default function App() {
  return (
    <ScrollView>

      <KeyboardAvoidingView behavior="position" enabled>

        <AddProductPage/>

      </KeyboardAvoidingView>

    </ScrollView>
  );
}