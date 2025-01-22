import { View, Text, Pressable, ScrollView, Share } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Data, useData } from '@/store/data';
import api from '@/app/services/api';

import { styles } from './style';
import { Link, router } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';

interface ResponseData {
  data: Data
}

export default function Nutrition() {
  const user =  useData((state) => state.data);

  const {data, isFetching, error} = useQuery({
    queryKey: ['nutrition'],
    queryFn: async () => {
      try {

        if(!user) {
          throw new Error('Falha ao carregar os dados');
        }
        
        const response = await api.post<ResponseData>('/create', {
          name: user.name,
          weight: user.weight,
          height: user.height,
          age: user.age,
          gender: user.gender,
          level: user.level,
          objective: user.objective,
        });
        return response.data.data;

      } catch (error) {
        console.log('Erro',error);
      }
    }
  });

  async function handleShare() {
    try {
      if(data && Object.keys(data).length === 0) return; 
      const supplements = `${data?.suplementos.map( item => ` ${item}`)}`

      const foods = `${data?.refeicoes.map( item => `\n- Nome: ${item.nome}\n- Horário: ${item.horario}\n- Alimentos: ${item.alimentos.map( alimento => ` ${alimento}` )}`)}`

      const message = `Dieta: ${data?.nome} - Objetivo: ${data?.objetivo}\n\n${foods}\n\n- Dica Suplemento: ${supplements}`

      await Share.share({
        message: message
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  if(isFetching) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Estamos carregando sua dieta!</Text>
        <Text style={styles.loadingText}>Consultando AI...</Text>
      </View>
    )
  }

  if(error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Falha ao carregar sua dieta!</Text>
        <Link href={'/step'}>
          <Text style={styles.loadingText}>Consultando AI...</Text>
        </Link>
      </View>
    )
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.contentHeader}>
          <Text style={styles.titleHeader}>Minha dieta!</Text>
          <Pressable style={styles.buttonHeader} onPress={handleShare}>
            <Text style={styles.buttonTextHeader}>Compartilhar</Text>
          </Pressable>
        </View>
      </View>

      <View 
        style={styles.list}
      >
        {data && Object.keys(data).length > 0 && (
          <>
            <Text style={styles.name}>Nome: {data.nome}</Text>
            <Text style={styles.objective}>Objetivo: {data.objetivo}</Text>
            <Text style={styles.label}>Refeições: </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.foods}>
                {data.refeicoes.map((refeicao) => (
                  <View key={refeicao.nome} style={styles.food}>
                    <View style={styles.foodHeader} >
                      <Text style={styles.foodTitle}>{refeicao.nome}</Text>
                      <Ionicons name="restaurant" size={16} color="black" />
                    </View>

                    <View style={styles.foodContent}>
                      <Feather name="clock" size={16} color="black" />
                      <Text style={styles.foodTime}>Horário: {refeicao.horario}</Text>
                    </View>

                    <Text style={styles.foodLabel}>Alimentos:</Text>
                    {refeicao.alimentos.map((alimento) => (
                      <Text key={alimento}>{alimento}</Text>
                    ))}
                  </View>
                ))}
              </View>
              <View style={styles.supplement}>
                <Text style={styles.foodTitle}>Dica de suplementos:</Text>
                {data.suplementos.map((suplemento) => (
                  <Text key={suplemento}>{suplemento}</Text>
                ))}
              </View>

              <Pressable style={styles.button} onPress={ () => router.replace("/") }>
                <Text style={styles.buttonText}>
                  Gerar nova dieta
                </Text>
              </Pressable>
            </ScrollView>
          </>
        )}
      </View>
    </View>
  )
}