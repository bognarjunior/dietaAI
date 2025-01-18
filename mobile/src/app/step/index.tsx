import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import Header from '@/app/components/header';
import Input from '@/app/components/input';

import { styles } from './style';

export default function Step() {
  return (
    <View style={styles.container}>
      <Header step="Passo 1" title="Vamos começar!" />
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <Input />
      </ScrollView>
    </View>
  )
}