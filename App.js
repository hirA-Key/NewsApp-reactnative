
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import ListItem from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
        imageUrl="https://picsum.photos/id/237/200/300"
        author="sampleNews"
      />
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
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  }
});
