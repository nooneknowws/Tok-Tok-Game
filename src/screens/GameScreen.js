import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GameScreen = ({ route }) => {
  const { nome } = route.params;
  const [circlePosition, setCirclePosition] = useState({ x: 50, y: 50 });
  const [contador, setContador] = useState(0);
  const [temporizador, setTemporizador] = useState(15);

  useEffect(() => {
    let timer2 = null;

    const startTimer2 = () => {
      timer2 = setInterval(() => {
        setTemporizador((prevTemporizador) => prevTemporizador - 1);
      }, 1000);
    };

    const resetTimer2 = () => {
      clearInterval(timer2);
      setTemporizador(15);
      startTimer2();
    };

    startTimer2();

    return () => {
      clearInterval(timer2);
    };
  }, []);

  useEffect(() => {
    if (temporizador === 0) {
      navigation.navigate('End', { nome, contador });
    }
  }, [temporizador]);

  useEffect(() => {
    let timer = null;

    const startTimer = () => {
      timer = setTimeout(() => {
        const newX = Math.random() * 250;
        const newY = Math.random() * 250;
        setCirclePosition({ x: newX, y: newY });
      }, 1000);
    };

    const resetTimer = () => {
      clearTimeout(timer);
      startTimer();
    };

    startTimer();

    return () => {
      clearTimeout(timer);
    };
  }, [circlePosition]);

  const handleCirclePress = () => {
    const newX = Math.random() * 250;
    const newY = Math.random() * 250;
    setCirclePosition({ x: newX, y: newY });
    setContador(contador + 1);
  };

  return (
          <View style={styles.container}>
          <View style={styles.top}>
              <Text style={styles.timerText}>{temporizador}s</Text>
              <Text style={styles.counterText}>Contador: {contador}</Text>
          </View>
          <View style={styles.game}>
              <TouchableOpacity
              style={[styles.circle, { top: circlePosition.y, left: circlePosition.x }]}
              onPress={handleCirclePress}
              />
          </View>
          </View>
      );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  counterText: {
    fontSize: 24,
  },
  game: {
    flex: 1,
    backgroundColor: 'lightblue',
    width: '100%',
    position: 'relative',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default GameScreen;