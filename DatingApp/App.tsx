import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FaceScreen from './src/screen/FaceScreen';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Premium Dating App</Text>
      <View style={styles.container}>
        <FaceScreen />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#feb0b0',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
