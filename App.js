
import { useState } from 'react';
import {StyleSheet,View } from 'react-native';
import StackNavigator from './StackNavigator';

export default function App() {
  const [action, setAction] = useState("")
  return (
    <>
      <StackNavigator />
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
