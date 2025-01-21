import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

import Header from '@/app/components/header';
import Select from '@/app/components/select';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { styles } from './style';

import { useData } from '@/store/data';
import { genderOptions, levelOptions, objectiveOptions } from '@/constants';

const schema = z.object({
  gender: z.string().min(3, 'O sexo é obrigatório'),
  objective: z.string().min(1, 'Selecione um objetivo'),
  level: z.string().min(1, 'Selecione um nível de atividade'),
});

type FormData = z.infer<typeof schema>;

export default function Create() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const setPageTwo = useData(state => state.setPageTwo);

  function handleCreate(data: FormData) {
      setPageTwo({
        gender: data.gender,
        objective: data.objective,
        level: data.level,
      });
      router.push('/nutrition');
    };

  return (
    <View style={styles.container}>
      <Header step="Passo 2" title="Finalizando dieta..." />
      <ScrollView style={styles.content}>
        <Select
          label="Sexo:" 
          name="gender"
          control={control}
          placeholder="Selecione o seu sexo"
          error={errors.gender?.message}
          options={genderOptions}
        />
        <Select
          label="Selecione o nível de atividade física:" 
          name="level"
          control={control}
          placeholder="Selecione seu nível de atividade física..."
          error={errors.level?.message}
          options={levelOptions}
        />
        <Select
          label="Selecione seu objetivo:" 
          name="objective"
          control={control}
          placeholder="Selecione o seu objetivo..."
          error={errors.objective?.message}
          options={objectiveOptions}
        />
        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}
