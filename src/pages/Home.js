import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import Logo from '../../assets/logo.png';

export default function Home() {
  const navigate = useNavigation();

  function navigateToTimer() {
    navigate.navigate('Timer');
  }

  return (
    <LinearGradient
    colors={['#D5B1B8', '#F65756']}
    style={styles.container}>
      <Image style={styles.logo} source={Logo} />

      <Text style={styles.title}>Staying focused at work ins't easy!</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <MaterialIcons name="navigate-next" size={36} color="#F65756" />
      </TouchableOpacity>
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  logo: {
    width: 430,
    height: 430,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    maxWidth: 300,
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }
})

