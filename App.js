import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert, Button, TextInput,ActivityIndicator,Switch } from "react-native";
import React, {useState} from 'react';

const DATA = [
  {
    id: "1",
    title: "Felipe",
  },
  {
    id: "2",
    title: "Jose Esteban",
  },
  {
    id: "3",
    title: "Jorge Luis",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const saludar = () => {
  Alert.alert("Hola Bienvenido");
};

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>Esta es la App del Taller 1</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Escriba su nombre aquí"
        keyboardType="text"
      />
      <ActivityIndicator size="large" color="#00ff00" />
      <Button
        onPress={saludar}
        title={'Bienvenido'}
        color="#841584"
        accessibilityLabel="Saludar"
      />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#70ddd0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
