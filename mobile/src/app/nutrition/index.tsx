import { View, Text } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


import { Data, useData } from '@/store/data';
import api from '@/app/services/api';
import { styles } from './style';

interface ResponseData {
  data: Data
}

export default function Nutrition() {
  const user =  useData((state) => state.data)
  console.log('user', user);
  const {data, isFetching, error} = useQuery({
    queryKey: ['nutrition'],
    queryFn: async () => {
      try {

        if(!user) {
          throw new Error('Falha ao carregar os dados');
        }
        console.log('Entra aqui')
        const response = await api.post<ResponseData>('/create', {
          name: user.name,
          weight: user.weight,
          height: user.height,
          age: user.age,
          gender: user.gender,
          level: user.level,
          objective: user.objective,
        });
        console.log('response',response.data);
        return response.data;

      } catch (error) {
        console.log('Erro',error);
      }
    }
  });

  if(isFetching) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Estamos carregando sua dieta!</Text>
        <Text style={styles.loadingText}>Consultando AI...</Text>
      </View>
    )
  }

  console.log('data', data);
 
  return (
    <View>
      <Text>Nutrition</Text>
    </View>
  )
}