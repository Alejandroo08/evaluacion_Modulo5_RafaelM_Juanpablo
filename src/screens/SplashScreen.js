import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
const SplashScreen = () => {
  return (
        <View style={styles.container}>
            <StatusBar style="light" />
                {/* Logo o icono de la aplicación */}
            <View style={styles.logoContainer}>
            <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>📱</Text>
            </View>
            <Text style={styles.appName}>Mi App Firebase</Text>
            </View>
            
                {/* Indicador de carga */}
            <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Cargando...</Text>
            </View>
            
                {/* Información adicional */}
            <View style={styles.footer}>
            <Text style={styles.footerText}>Versión 1.0.0</Text>
            </View>
            </View>
        );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 60,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 15,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
});
 
export default SplashScreen;