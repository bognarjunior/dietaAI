import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';

import Header from '@/app/components/header';
import Input from '@/app/components/input';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { styles } from './style';
import { router } from 'expo-router';

const schema = z.object({
  name: z.string({
    required_error: "Nome é obrigatório",
  }).min(3, {message: "O nome precisa ter no mínimo 3 caracteres"}),
  age: z.string({
    required_error: "O idade é obrigatório",
  }).min(1, {message:'O idade é obrigatório'}),
  height: z.string({
    required_error: "O peso é obrigatório",
  }).min(1, {message:'O peso é obrigatório'}),
  weight: z.string({
    required_error: "O altura é obrigatório",
  }).min(1, {message:'O altura é obrigatório'}),
});

type FormData = z.infer<typeof schema>;

export default function Step() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleCreate(data: FormData) {
    console.log(data);
    router.push('/create');
  };

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
        <Input
          name="weight"
          control={control}
          label="Peso"
          error={errors.weight?.message}
          placeholder='Ex: 75' 
          keyboardType='numeric'
        />
        <Input
          name="height"
          control={control}
          label="Altura"
          error={errors.height?.message}
          placeholder='Ex: 180' 
          keyboardType='numeric'
        />
        <Input
          name="age"
          control={control}
          label="Idade"
          error={errors.age?.message}
          placeholder='Ex: 28' 
          keyboardType='numeric'
        />

        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}