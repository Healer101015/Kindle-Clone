import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CategoryButtons() {
  return (
    <View style={styles.categoryButtonsContainer}>
      {['Explorar', 'Romance', 'Mistério'].map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: 'transparent', // Fundo transparente
    paddingVertical: 12, // Padding para dar espaço vertical
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1, // Borda para delinear os botões
    borderColor: '#ccc', // Cor da borda em cinza claro
  },
  categoryButtonText: {
    color: '#000', // Texto preto
    fontSize: 16, // Tamanho da fonte
    fontWeight: '500', // Peso da fonte
  },
});

export default CategoryButtons;
