import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from './screens/DetailScreen';
import { HomeScreen } from './screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { itemId: number; otherParam: string };
};

export const ScreenContent = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </>
  );
};
