import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 18,
  },
});


const HomeScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');

  const handleInputChange = (text) => {
    setNome(text);
  };

  const handleButtonPress = () => {
    navigation.navigate('Game', { nome });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={handleInputChange}
      />
      <Button title="Começar" onPress={handleButtonPress} />
    </View>
  );
};

export default HomeScreen;
