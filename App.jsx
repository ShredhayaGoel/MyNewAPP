import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

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
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
