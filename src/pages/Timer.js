import React, { useState, useRef } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Timer() {
  const timerRef = useRef();

  const [playTimer, setPlayTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function toggleTimer() {
    if (playTimer) {
      clearInterval(timerRef.current);
      setPlayTimer(false);

    } else {
      timerRef.current = setInterval(() => {
        setSeconds(curr => curr + 1);
      }, 1000);

      setPlayTimer(true);
    }
  }

  function formatTimer(seconds) {
   if (seconds > 60) {
     return (
       <View style={styles.display}>
        <Text style={styles.titleDisplayTimer}>{Math.floor(seconds / 60)}</Text>
        <Text style={styles.titleDisplayTimerStamp}>Minutos</Text>
       </View>
     )
   } else {
     return (
      <View style={styles.display}>
        <Text style={styles.titleDisplayTimer}>{seconds}</Text>
        <Text style={styles.titleDisplayTimerStamp}>Segundos</Text>
     </View>
     )
   }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>

      <AnimatedCircularProgress
        size={260}
        width={10}
        rotation={0}
        fill={(seconds * 100) / 600}
        tintColor="#F65756"
        backgroundColor="#D5B1B8">
        {
          () => (
            <Text>
              {formatTimer(seconds)}
            </Text>
          )
        }
      </AnimatedCircularProgress>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Feather name= { playTimer ? 'pause-circle' : "play-circle" }size={60} color="#F65756" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F65756',
    marginBottom: 80,
  },
  display: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDisplayTimer: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#000'
  },
  titleDisplayTimerStamp: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ccc'
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginTop: 80,
    justifyContent: 'center',
  }
})

