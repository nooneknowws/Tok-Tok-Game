import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EndScreen = ({ route }) => {
  const { nome, contador } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parabéns, {nome}!</Text>
      <Text style={styles.subtitle}>Você fez {contador} pontos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
  },
});

export default EndScreen;
