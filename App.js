import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';
import Recipe from './Components/recipe';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>BREWY</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Recipe />
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Amizing Brewing Tool To Be Implemented</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bfc0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#2d2d34',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    padding: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24
  },
  content: {
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder: {
    backgroundColor: '#ef8354',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  placeholderText: {
    color: '#fff',
    fontSize: 15,
  }
});
