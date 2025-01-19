import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import React from 'react';

import { Controller } from 'react-hook-form';

import { styles } from './style';

interface Props {
  label?: string;
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
}

export default function Input({ label, name, control, placeholder, rules, error, keyboardType }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules} 
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType={keyboardType}
          />  
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}