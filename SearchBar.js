import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles' // Importando os estilos
function SearchBar({ onSearch }) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar no Kindle"
        onChangeText={onSearch}
      />
    </View>
  );
}



export default SearchBar;
