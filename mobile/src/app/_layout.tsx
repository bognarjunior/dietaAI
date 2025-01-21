import { Stack } from "expo-router";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="step/index" />
        <Stack.Screen name="create/index" />
        <Stack.Screen name="nutrition/index" />
      </Stack>
    </QueryClientProvider>
  );
}
