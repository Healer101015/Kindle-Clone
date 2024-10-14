import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SearchBar from './SearchBar';
import BookCarousel from './BookCarousel';
import { categories } from './data';

function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = filterBooks(searchTerm);

  function filterBooks(searchTerm) {
    if (!searchTerm) {
      return categories;
    }
    return categories
      .map(category => ({
        ...category,
        data: category.data.filter(book =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter(category => category.data.length > 0);
  }

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SearchBar onSearch={setSearchTerm} />
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <BookCarousel key={index} category={category} />
        ))
      ) : (
        <View style={{ padding: 20 }}>
          <Text style={{ textAlign: 'center', color: 'gray' }}>Nenhum resultado encontrado</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default HomeScreen;
