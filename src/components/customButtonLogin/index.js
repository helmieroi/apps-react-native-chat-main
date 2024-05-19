import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      backgroundColor: '#1574FF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',marginTop:14
    },
    buttonText: {
      color: '#FBFBFD',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });