import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import * as SplashScreen from 'expo-splash-screen';

// Importar pantallas
import SplashScreenComponent from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import EditProfileScreen from './screens/EditProfileScreen';

const Stack = createStackNavigator();

// Prevenir que el splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    // Simular tiempo de carga del splash screen
    setTimeout(() => {
      setShowSplash(false);
      SplashScreen.hideAsync();
    }, 3000);

    return unsubscribe;
  }, []);

  if (showSplash) {
    return <SplashScreenComponent />;
  }

  if (isLoading) {
    return <SplashScreenComponent />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Usuario autenticado
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          </>
        ) : (
          // Usuario no autenticado
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}