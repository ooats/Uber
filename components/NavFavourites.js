import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>Yo</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
