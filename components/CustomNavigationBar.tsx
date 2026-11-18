import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

export default function CustomNavigationBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="MD Nav Demo" />
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      ) : null}
    </Appbar.Header>
  );
}