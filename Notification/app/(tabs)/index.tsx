import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
import { Notification } from '@/components/Notification';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000); // Ocultar la notificación después de 5 segundos
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor="#aaa" // Mejorar la visibilidad del placeholder
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonClick} accessible={true} accessibilityLabel="Check name button">
        <Text style={styles.buttonText}>What's my name?</Text>
      </TouchableOpacity>
      {showNotification && (
        <Notification
          text={name ? `Your name is ${name}` : 'No name has been entered'}
          subtitle=''
          type={name ? "info" : "error"}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    color: '#fff',
    borderRadius: 5,
    backgroundColor: '#333', // Fondo gris oscuro para el input
  },
  button: {
    backgroundColor: '#088CFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
