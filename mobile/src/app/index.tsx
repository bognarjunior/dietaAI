import { Text, View, Image, Pressable, StatusBar } from "react-native";
import { styles } from "./style";
import React from "react";

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <View
        style={styles.container}
        >
        <Image source={require('../assets/logo.png')} />

        <Text style={styles.title}>Dieta
          <Text style={styles.textAI}>
            .AI
          </Text>
        </Text>

        <Text style={styles.text}>Sua dieta personalizada com inteligência artificial</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </View>
    </>
  );
}
