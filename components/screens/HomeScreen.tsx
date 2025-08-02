
// Updated HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../ScreenContent';
import { useTheme } from 'components/Theme/ThemeContext';
import { ThemeToggleButton } from 'components/Theme/ToogleTheme';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDark } = useTheme();

  return (
    <View className={`flex-1 items-center justify-center ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Text className={`text-xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Home Screen
      </Text>
      
      <Text className={`mb-4 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Current mode: {isDark ? 'Dark' : 'Light'}
      </Text>

      <View className="mb-4">
        <ThemeToggleButton />
      </View>

      <Button
        title="Go to Details.."
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};