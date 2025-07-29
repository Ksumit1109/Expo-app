import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ScreenContent />
      </NavigationContainer>
    </>
  );
}
