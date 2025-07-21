import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/splash-icon.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Big Gurls Beauty Parlour</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB', // Light pink background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800080', // Purple text
    textAlign: 'center',
  },
});