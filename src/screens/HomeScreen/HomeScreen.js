import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import store from '../../context/store';
const HomeScreen = ({ navigation }) => {
  const {user} = useSelector(store=>store.user);

console.log("navigation",user)
  return (
    <View style={styles.container}>
    <Text>{`Hello ${user?.username}`}</Text> 
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Messages')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
