import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router'

export default function TabOneScreen() {
  const payload = 'This should pass'
  const handleClick = () => {
    router.navigate({pathname: '/(two)', params: {something: `${encodeURIComponent(payload)}`}})
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleClick()}>
          <Text>Tab One</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
