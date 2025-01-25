import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Erro ao buscar detalhes do usuário:', error));
  }, [userId]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Nome: {user.name}</Text>
      <Text style={styles.detailText}>Username: {user.username}</Text>
      <Text style={styles.detailText}>Email: {user.email}</Text>
      <Text style={styles.detailText}>Contato: {user.phone}</Text>
      <Text style={styles.detailText}>Website: {user.website}</Text>
      <Text style={styles.detailText}>
        Endereço: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsScreen;
