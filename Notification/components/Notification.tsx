import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Dimensions, TextProps } from 'react-native';
import { ThemedText } from './ThemedText';

export type NotificationProps = TextProps & {
  text?: string;
  subtitle?: string;
  type?: 'info' | 'warning' | 'error';
  backgroundColor?: string;
  duration?: number; // Duración en milisegundos antes de que la notificación desaparezca
};

export function Notification({
  text = "this is a notification",
  subtitle = "this is a subtitle",
  type = 'info',
  backgroundColor,
  duration = 3000, // Valor predeterminado de 3 segundos
  style,
  ...props
}: NotificationProps) {
  const [visible, setVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0)); // Valor inicial de opacidad

  useEffect(() => {
    // Animación de entrada
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Duración de la animación de entrada
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      // Animación de salida
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Duración de la animación de salida
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }, duration);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [duration, fadeAnim]);

  if (!visible) {
    return null; // No renderizar nada si la notificación no es visible
  }

  // Define default colors based on the type of notification
  const backgroundColors = {
    info: '#0084FF',
    warning: '#FB9300',
    error: '#FF6347',
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: backgroundColor || backgroundColors[type], opacity: fadeAnim },
        style,
      ]}
      {...props}
    >
    <Text style={styles.subtitle}>Info message</Text>
      <ThemedText type='subtitle' style={styles.text}>{text}</ThemedText>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffff',
  },
});
