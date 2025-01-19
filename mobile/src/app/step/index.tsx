import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import Header from '@/app/components/header';
import Input from '@/app/components/input';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { styles } from './style';

const schema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres'),
  age: z.string().min(1, 'O idade é obrigatório'),
  height: z.string().min(1, 'O peso é obrigatório'),
  weight: z.string().min(1, 'O altura é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export default function Step() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <View style={styles.container}>
      <Header step="Passo 1" title="Vamos começar!" />
      <ScrollView style={styles.content}>
        <Input
          name="name"
          control={control}
          label="Nome"
          error={errors.name?.message}
          placeholder='Digite seu nome...' 
          keyboardType='default'
        />
      </ScrollView>
    </View>
  )
}