import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
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
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});

export default styles;
