import React from "react";
import { StyleSheet, Image, Text, View , } from "react-native";


const ListItem = ({ imageUrl, title, author}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          {!!imageUrl &&
            <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl }}
          />}
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text} numberOfLines={3}>
            {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "gray",
  },
});
