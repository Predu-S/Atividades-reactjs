import React from 'react';
import { View, FlatList, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  // Dados com ID, ORIGEM e URL das imagens
  const data = [
    { id: '1', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '2', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '3', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '4', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '5', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '6', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '7',origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '8', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '9', origem: 'local', URL: require('./assets/snack-icon.png') },
    { id: '10', origem: 'local', URL: require('./assets/snack-icon.png')},
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.origem === 'local' ? (
        <Image source={item.URL} style={styles.image} />
      ) : (
        <Image source={{ uri: item.URL }} style={styles.image} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    
  },
  itemContainer: {
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,  
    height: 100, 
    resizeMode: 'cover', 
  },
});

export default App;
