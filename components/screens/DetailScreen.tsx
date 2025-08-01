import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../ScreenContent';
import { RouteProp } from '@react-navigation/native';

export const DetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const { itemId, otherParam } = route.params;

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Detail Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.navigate('Home')} />
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
    </View>
  );
};
