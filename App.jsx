import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/262/large/file.jpg?1706950301',
        }}
      />

      <Button title="Click Me"></Button>

      <TouchableOpacity
        style={{ padding: 10, backgroundColor: 'green' }}
        onPress={() => Alert.alert('pressed')}
      >
        <Text>press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
