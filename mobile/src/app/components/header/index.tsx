import { View, Text, Pressable } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { router } from 'expo-router';

interface HeaderProsp{
  step: string,
  title: string
}

export default function Header({step, title}: HeaderProsp) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable onPress={() => {router.back()}}>
            <Feather name='arrow-left' size={22} />
          </Pressable>
          <Text style={styles.text}>{step}</Text>
          <Feather name='loader' size={16} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}