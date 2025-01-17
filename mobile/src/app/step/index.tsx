import { View, Text } from 'react-native';
import React from 'react';
import Header from '@/app/components/header';
import { styles } from './style';

export default function Step() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Step</Text>
    </View>
  )
}