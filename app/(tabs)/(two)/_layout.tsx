import React from 'react';
import { Stack } from 'expo-router';
import { useGlobalSearchParams } from 'expo-router';

const layoutRoot = () => {
  const params = useGlobalSearchParams();
  console.log('From layout', params)
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default layoutRoot;
