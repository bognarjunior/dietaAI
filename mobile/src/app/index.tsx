import { Text, View, Image, Pressable, StatusBar } from "react-native";
import React from "react";

import { Link } from "expo-router";

import { styles } from "./style";

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

        <Link href={"/step"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Gerar dieta</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
