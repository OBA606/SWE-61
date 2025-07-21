import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './SplashScreen';
import HomePage from './HomePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <HomePage />
      <StatusBar style="auto" />
    </>
  );
}

// No styles needed at App level as they're defined in HomePage
