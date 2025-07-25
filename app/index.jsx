import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from 'expo-router'

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Text>This is the Home Page</Text>
        <TouchableOpacity style={styles.playButton} onPress={() => router.push('/quiz')}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  playButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#aaaaaa',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight:'bold'
  }
})



export default HomeScreen;