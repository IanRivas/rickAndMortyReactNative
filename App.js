import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import { useEffect, useState } from 'react';

import Character from './components/Character';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=1') //42 maximo
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#D5A021" />
      <View style={styles.header}>
        <Text style={styles.title}>Rick and Morty</Text>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="black"
          placeholder="Search for Name"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        data={characters.filter((character) =>
          character.name.toLowerCase().includes(search)
        )}
        style={styles.list}
        renderItem={({ item }) => {
          return <Character character={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A49694',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '90%',
    marginBottom: 25,
    marginTop: 25,
  },
  list: {
    width: '90%',
    paddingBottom: 20,
  },
  title: {
    color: '#D5A021',
    fontSize: '3rem',
    margin: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  searchInput: {
    color: '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
  },
});
