import { View, Text } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


import { useData } from '@/store/data';
import api from '@/app/services/api';
import { styles } from './style';


export default function Nutrition() {
  const user =  useData((state) => state.data)
  console.log('user', user);
  const {data, isFetching, error} = useQuery({
    queryKey: ['create'],
    queryFn: async () => {
      //try {

        //if(!user) {
         // throw new Error('Falha ao carregar os dados');
       /// }

        const response = await api.post('/create', {
          name: user.name,
          weight: user.weight,
          height: user.height,
          age: user.age,
          gender: user.gender,
          level: user.level,
          objective: user.objective,
        });
        console.log(response.data.data);
        return response.data.data;

      //} catch (error) {
        //console.log('Erro',error);
      //}
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