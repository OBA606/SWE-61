import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <Text style={styles.searchIconText}>🔍</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search services..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to Big Gurls Beauty Parlour!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#FFC0CB',
  },
  homeButton: {
    padding: 8,
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800080',
  },
  searchIcon: {
    padding: 8,
  },
  searchIconText: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFE6EA',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#800080',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#800080',
  },
});