import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

import { styles } from './style';
import { theme } from "@/theme";

const { colors } = theme;

interface OptionProps {
  label: string;
  value: string | number;
}
interface Props {
  label?: string;
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  options: OptionProps[]
}

export default function Select({ label, name, control, placeholder, error, options }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <TouchableOpacity
              style={styles.select}
              onPress={() => setModalVisible(true)}
            >
              <Text>
                {value ? options.find((option) => option.value === value)?.label : placeholder}
              </Text>
              <Feather name="arrow-down" size={20} color={colors.black} />
            </TouchableOpacity>
              <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)} 
              >
                <TouchableOpacity
                  style={styles.modalContainer}  
                  onPress={() => setModalVisible(false)}
                >
                  <TouchableOpacity
                    style={styles.modalContent}  
                    onPress={() => {}}
                  >
                    <FlatList 
                      contentContainerStyle={styles.modalList}
                      data={options}  
                      keyExtractor={(item) => item.value.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.modalItem}
                          onPress={() => {
                            onChange(item.value);
                            setModalVisible(false);
                          }}
                        >
                          <Text>{item.label}</Text>
                        </TouchableOpacity>   
                      )}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Modal>
          </>  
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}