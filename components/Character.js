import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Character = ({ character }) => {
  return (
    <View style={styles.containerCharacter}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View>
        <Text style={styles.text}>{character.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCharacter: {
    backgroundColor: '#736B60',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    color: '#D5A021',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Character;
