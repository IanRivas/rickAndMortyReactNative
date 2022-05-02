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
    foo();
  }, []);

  function getAllRequests() {
    const requests = [];
    for (let i = 1; i < 10; i++) {
      requests.push(
        fetch('https://rickandmortyapi.com/api/character/?page=' + i)
      );
    }
    // requests is an array of promises
    return requests;
  }

  async function foo() {
    const charactersAux = [];
    const responses = await Promise.all(getAllRequests());
    const data = await Promise.all(responses.map((res) => res.json()));
    data.forEach((object) => charactersAux.push(...object.results));

    setCharacters(charactersAux);
  }
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
