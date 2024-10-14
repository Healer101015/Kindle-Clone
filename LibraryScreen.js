import React, { useState } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';
import CategoryButtons from './CategoryButtons';
import BookCarousel from './BookCarousel';
import { libraryCategories } from './data'; // Importando as categorias da biblioteca
import styles from './styles'; // Importando os estilos

function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa

  // Função para filtrar os livros com base na pesquisa
  const filterBooks = (books) => {
    if (!searchQuery) return books; // Retornar todos os livros se não houver pesquisa
    return books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar livros..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Adicionando margem superior maior aos botões de categoria */}
      <View style={{ marginTop: 20, marginBottom: 30 }}>
        <CategoryButtons />
      </View>

      {libraryCategories.map((category, index) => {
        // Filtrar os livros da categoria com base na consulta de pesquisa
        const filteredBooks = filterBooks(category.data);

        // Somente renderizar o BookCarousel se houver livros filtrados
        return (
          filteredBooks.length > 0 && (
            <BookCarousel key={index} category={{ ...category, data: filteredBooks }} />
          )
        );
      })}
    </ScrollView>
  );
}

export default LibraryScreen;
