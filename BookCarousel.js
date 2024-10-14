import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

function BookCarousel({ category }) {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        horizontal
        data={category.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookItem: {
    marginRight: 15,
    width: 120,
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
  bookTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default BookCarousel;
