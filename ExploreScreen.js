import React, { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import CategoryButtons from './CategoryButtons';
import BookCarousel from './BookCarousel';
import { exploreCategories } from './data'; // Importando as categorias de exploração
import styles from './styles'; // Importando os estilos

function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa

  // Função para filtrar os livros com base na consulta de pesquisa
  const filterBooks = (books) => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar livros..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <CategoryButtons />
      {exploreCategories.map((category, index) => {
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

export default ExploreScreen;
