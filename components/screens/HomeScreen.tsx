import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../ScreenContent';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Home</Text>
      <Button
        title="Go to Details.."
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};
