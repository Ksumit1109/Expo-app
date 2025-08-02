import React from 'react';
import { Pressable, Text } from 'react-native';
import { useTheme } from './ThemeContext';

export const ThemeToggleButton = () => {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Pressable
      onPress={toggleTheme}
      className={`px-4 py-2 rounded-full ${
        isDark ? 'bg-yellow-500' : 'bg-gray-800'
      }`}
    >
      <Text className={`text-sm font-medium ${
        isDark ? 'text-black' : 'text-white'
      }`}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </Text>
    </Pressable>
  );
};