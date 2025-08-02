import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from './screens/DetailScreen';
import { HomeScreen } from './screens/HomeScreen';
import { View } from 'react-native';
import { useTheme } from './Theme/ThemeContext';

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

export const ScreenContent = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { isDark } = useTheme();

  return (
    <View className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? '#1F2937' : '#FFFFFF', // gray-800/white
          },
          headerTintColor: isDark ? '#F9FAFB' : '#111827', // gray-50/gray-900
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: isDark ? '#111827' : '#FFFFFF', // gray-900/white
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
            },
            headerTintColor: isDark ? '#F9FAFB' : '#111827',
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
            },
            headerTintColor: isDark ? '#F9FAFB' : '#111827',
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
