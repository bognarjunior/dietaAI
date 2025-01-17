import { View, Text, Pressable } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';


export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable>
            <Feather name='arrow-left' size={22} />
          </Pressable>
          <Text style={styles.text}>Passo 1</Text>
          <Feather name='loader' size={16} />
        </View>
        <Text style={styles.title}>Vamos começar!</Text>
      </View>
    </View>
  )
}