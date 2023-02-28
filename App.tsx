import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';

import { RootStackParamList } from '@type/routes';
import HomeScreen from '@screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import IntroScreen from '@screens/IntroScreen';
import MyPageScreen from '@screens/MyPageScreen';
import RecordScreen from '@screens/RecordScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

const App = () => {
  const handleSplashHide = () => {
    setTimeout(async () => {
      try {
        await RNBootSplash.hide({ fade: true, duration: 500 });
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };
  useEffect(() => {
    handleSplashHide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="IntroScreen"
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: Colors.white01 },
            }}
          >
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
            <Stack.Screen name="RecordScreen" component={RecordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
